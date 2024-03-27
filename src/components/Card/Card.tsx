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

export default function MultiActionAreaCard() {
  const theme = useContext<DefaultTheme | undefined>(ThemeContext);
  const [projectFData, setProjectFData] = useState([]);
  const [projectBData, setProjectBData] = useState([]);
  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get("https://api.github.com/users/Lu4n-M0ur4/repos?per_page=100")
  //     .then((res) =>
  //       setProjectFData(
  //         res.data.filter((r: any) => r.homepage != null && r.homepage != "")
  //       )
  //     );
  // }, []);

  console.log(projectBData);
  

  // useEffect(() => {
  //   axios
  //     .get("https://api.github.com/users/Lu4n-M0ur4/repos?per_page=100")
  //     .then((res) => setProjectBData(res.data));
  // }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
              <StyledCardMedia sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://picsum.photos/200"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
              <StyledCardMedia sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://picsum.photos/200"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
