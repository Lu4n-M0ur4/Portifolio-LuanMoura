import React, { useContext } from "react";
import { MainContainer, StacksImg } from "./Main.style";
import Luan from "../../assets/1665335617663_(1)-transformed.png";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { DefaultTheme } from "styled-components/dist/types";
import { ThemeContext } from "styled-components";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const Main: React.FC = () => {
  const theme = useContext<DefaultTheme | undefined>(ThemeContext);

  const navigate: NavigateFunction = useNavigate();

  const [greetingPhrase] = useTypewriter({
    words: ["me chamo Luan Moura", "sejam bem-vindos!"],
    loop: 0,
  });

  if (!theme) {
    return null;
  }

  return (
    <>
      <MainContainer>
        <article>
          <p>
            Olá, {greetingPhrase}{" "}
            <Cursor cursorColor={theme.colors.primary} cursorStyle="/" />
          </p>

          <h1>
            DEV FULLSTA
            <Cursor cursorColor={theme.colors.text} cursorStyle="C" />K
          </h1>
          <a href="https://skillicons.dev">
            <StacksImg 
              src="https://skillicons.dev/icons?i=js,react,ts,nodejs,express,postman,sqlite,github,jest,figma,styledcomponents,toastify"
              
            />
          </a>

          <button onClick={() => navigate("/Projetos")}>
            Ver meu Portifólio
            <ArrowOutwardIcon />
          </button>
        </article>
        <div>
          <img src={Luan} alt="" />
        </div>
      </MainContainer>
    </>
  );
};
