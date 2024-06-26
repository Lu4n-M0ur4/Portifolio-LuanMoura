import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Tab,
  Tabs,
  Theme,
} from "@mui/material";
import {
  BoxCustom,
  BoxTabs,
  CardContainer,
  StyledCardMedia,
} from "./Card.style";
import { useContext, useEffect, useState } from "react";
import { DefaultTheme } from "styled-components/dist/types";
import { ThemeContext } from "styled-components";
import axios from "axios";
import { shade } from "polished";


type Project = {
  name?: string | undefined;
  description?: string  | undefined;
  language?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  homepage: string | undefined;
};


export default function MultiActionAreaCard() {
  const theme = useContext<DefaultTheme | undefined>(ThemeContext);
  const [projectFData, setProjectFData] = useState<Project[]>([]);
  const [projectBData, setProjectBData] = useState<Project[]>([]);
  const [value, setValue] = useState(0);


  useEffect(() => {
    axios
      .get<Project[]>("https://api.github.com/users/Lu4n-M0ur4/repos?per_page=103")
      .then((res) =>
        setProjectFData(
          res.data.filter((r) => r.homepage != null && r.homepage != "")
        )
      );
  }, []);


  useEffect(() => {
    axios
      .get<Project[]>("https://api.github.com/users/Lu4n-M0ur4/repos?per_page=200")
      .then((res) => setProjectBData(res.data.filter((r)=>r.language === 'TypeScript' && r.description && r.name !== "Portifolio-LuanMoura" )));
  }, []);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };




  return (
    <BoxCustom theme={theme as Theme & DefaultTheme}>
      <BoxTabs>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="FullStack"
            sx={{
              width: "200px",
              height: "60px",
              fontSize: "18px",
              color: shade(0.4, "#ddd"),
            }}
          />
          <Tab
            label="BackEnd"
            sx={{
              width: "200px",
              height: "60px",
              fontSize: "18px",
              color: shade(0.4, "#ddd"),
            }}
          />
        </Tabs>
      </BoxTabs>
      {value === 0 ? (
        <CardContainer>
          {projectFData?.map((p) => (
            <>
              <StyledCardMedia
                sx={{ maxWidth: 500 }}
                theme={theme as Theme & DefaultTheme}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={p?.description}
                    alt={p?.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {p?.name}
                    </Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                      {`Projeto desenvolvido com ${p.language} interativo com práticas de acessibilidade e utilização e UI/UX, criado em ${p?.created_at?.slice(0,10)} e última modificação sofrida em ${p?.updated_at?.slice(0,10)}. `}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  sx={{
                    background:
                      theme?.title === "dark"
                        ? theme.colors.secondary
                        : theme?.colors.background,
                  }}
                >
                  <Button
                    href={p.homepage || ""}
                    target="_blank"
                    size="small"
                    sx={{
                      color:
                        theme?.title === "dark"
                          ? theme.colors.primary
                          : theme?.colors.secondary,
                    }}
                  >
                    Deploy!
                  </Button>
                </CardActions>
              </StyledCardMedia>
            </>
          ))}
        </CardContainer>
      ) : (
        <CardContainer>
          {projectBData?.map((p) => (
            <>
              <StyledCardMedia
                sx={{ maxWidth: 500 }}
                theme={theme as Theme & DefaultTheme}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={p?.description}
                    alt={p?.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {p?.name}
                    </Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                      {`Projeto desenvolvido com ${p?.language} interativo com práticas de acessibilidade e utilização de arquitetura, criado em ${p?.created_at?.slice(0,10)} e última modificação sofrida em ${p?.updated_at?.slice(0,10)}. `}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  sx={{
                    background:
                      theme?.title === "dark"
                        ? theme.colors.secondary
                        : theme?.colors.background,
                  }}
                >
                  <Button
                    href={p.homepage || ""}
                    target="_blank"
                    size="small"
                    sx={{
                      color:
                        theme?.title === "dark"
                          ? theme.colors.primary
                          : theme?.colors.secondary,
                    }}
                  >
                    Deploy!
                  </Button>
                </CardActions>
              </StyledCardMedia>
            </>
          ))}
        </CardContainer>
      )}
    </BoxCustom>
  );
}
