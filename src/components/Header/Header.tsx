import React, { useContext } from "react";
import Switch from "react-switch";
import { HeaderContainer, Secction2, Secction1 } from "./Header.style";
import { DefaultTheme, ThemeContext } from "styled-components";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import Brightness5Icon from "@mui/icons-material/Brightness5";

import { shade } from "polished";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logoDark from "../../assets/logoDark.png";
import logoLigth from "../../assets/logoLigth.png";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

interface Props {
  toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext<DefaultTheme | undefined>(ThemeContext);

  const navigate: NavigateFunction = useNavigate();

  if (!theme) {
    return null;
  }

  const { colors, title } = theme;

  return (
    <HeaderContainer>
      <Secction1>
        <img
          src={theme.title === "dark" ? logoDark : logoLigth}
          alt="Logo WebSolution"
          onClick={() => navigate("/")}
        />
      </Secction1>

      <Secction2>
        <div>
          <ul>
            <li>
              <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                  color:
                    theme.title === "dark"
                      ? theme.colors.primary
                      : theme.colors.secondary,
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/Projetos"}
                style={{
                  textDecoration: "none",
                  color:
                    theme.title === "dark"
                      ? theme.colors.primary
                      : theme.colors.secondary,
                }}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to={"/Sobre"}
                style={{
                  textDecoration: "none",
                  color:
                    theme.title === "dark"
                      ? theme.colors.primary
                      : theme.colors.secondary,
                }}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to={"/Contato"}
                style={{
                  textDecoration: "none",
                  color:
                    theme.title === "dark"
                      ? theme.colors.primary
                      : theme.colors.secondary,
                }}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
        {"|"}
        <div>
          <a
            href="https://www.linkedin.com/in/luanmoura/"
            style={{
              color:
                theme.title === "dark"
                  ? theme.colors.primary
                  : theme.colors.secondary,
            }}
            target="_blank"
          >
            {" "}
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Lu4n-M0ur4"
            style={{
              color:
                theme.title === "dark"
                  ? theme.colors.primary
                  : theme.colors.secondary,
            }}
            target="_blank"
          >
            {" "}
            <GitHubIcon />
          </a>
        </div>
        {"|"}
        <div>
          {title == "dark" ? <NightlightRoundIcon /> : <Brightness5Icon />}{" "}
          <Switch
            onChange={toggleTheme}
            checked={title == "dark"}
            checkedIcon={false}
            uncheckedIcon={true}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.1, colors.primary)}
            onColor={shade(0.2, colors.secondary)}
          />
        </div>
      </Secction2>
    </HeaderContainer>
  );
};
