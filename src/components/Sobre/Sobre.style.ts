import { Box, Divider, css, styled } from "@mui/material";
import { DefaultTheme } from "styled-components/dist/types";

interface ThemeProps {
  theme: DefaultTheme;
}

export const AboutContainer = styled(Box)`
  max-width: 100vw;
  height: calc(100vh - 200px);
  gap: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  margin: 70px 20px 10px 20px;
`;
export const BoxContent = styled(Box)`
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10%;
`;
export const SectionResume = styled(Box)`
  height: auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;
`;

export const TitleBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  ul {
    margin: 0;
    padding: 5px;
    list-style: none;
  }

  h1 {

    margin: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 40px;
  }
  h2 {
    width: fit-content;

    padding: 6px;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 300;

    border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    background: #d5cfcf;
    ${(props: ThemeProps) =>
      props?.theme?.title === "dark"
        ? css`
            background: ${props?.theme?.colors?.secondary};
            color: ${props?.theme?.colors?.primary};
          `
        : css`
            background: ${props?.theme?.colors?.secondary};
            color: ${props?.theme?.colors?.primary};
          `}
  }

  h3 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 2px;
    text-align: justify;
  }

  ${(props: ThemeProps) =>
    props?.theme?.title === "dark"
      ? css`
          color: ${props?.theme?.colors?.primary};
        `
      : css`
          color: ${props?.theme?.colors?.secondary};
        `}
`;
export const HrContent = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const DividerContent = styled(Divider)`
  width: 3px;
  height: 95%;
  align-self: center;
  justify-self: center;
  margin-top: -6px;
  border: none;

  ${(props: ThemeProps) =>
    props?.theme?.title === "dark"
      ? css`
          background-color: ${props?.theme?.colors?.primary};
        `
      : css`
          background-color: ${props?.theme?.colors?.secondary};
        `}
`;
