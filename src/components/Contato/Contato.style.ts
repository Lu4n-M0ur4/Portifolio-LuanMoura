import { Box, TextField, css, styled } from "@mui/material";
import { DefaultTheme } from "styled-components/dist/types";

interface ThemeProps {
  theme: DefaultTheme;
}

export const ContactContainer = styled(Box)`
  margin: 100px auto 0px auto;
  display: flex;
  flex-direction: row;
`;

export const SocialContact = styled(Box)`
  min-width: 50vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SocialContent = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;

    margin: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 40px;
    ${(props: ThemeProps) =>
      props?.theme?.title === "dark"
        ? css`
            color: ${props?.theme?.colors?.primary};
          `
        : css`
            color: ${props?.theme?.colors?.secondary};
          `}
  }

  h3 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    align-self: self-start;

    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 300;

    ${(props: ThemeProps) =>
      props?.theme?.title === "dark"
        ? css`
            color: ${props?.theme?.colors?.primary};
          `
        : css`
            color: ${props?.theme?.colors?.secondary};
          `}
  }
`;

export const FormContainer = styled(Box)`
  min-width: 50vw;
  max-height: 100vh;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  align-content: center;

  @media (max-height: 850px) {
    
  }

  form {
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;

    button {
      width: 500px;
      height: 50px;
      background: none;

      margin-top: 30px;
      padding: 10px;
      border-radius: 16px;

      font-size: 24px;
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      ${(props: ThemeProps) =>
        props?.theme?.title === "dark"
          ? css`
              color: ${props?.theme?.colors?.primary};
              border: solid 2px ${props?.theme?.colors?.text};
            `
          : css`
              color: ${props?.theme?.colors?.secondary};
              border: solid 2px ${props?.theme?.colors?.text};
            `}
    }
  }
`;

export const FormInputMessage = styled(TextField)`
  min-width: 500px;
  min-height: 100px;

  input {
    height: 200px;
  }

  label {
    ${(props: ThemeProps) =>
      props?.theme?.title === "dark"
        ? css`
            color: ${props?.theme?.colors?.primary};
          `
        : css`
            color: ${props?.theme?.colors?.secondary};
          `}
  }

  ${(props: ThemeProps) =>
    props?.theme?.title === "dark"
      ? css`
          .MuiOutlinedInput-notchedOutline {
            border: solid 1px ${props?.theme?.colors?.text}!important;
          }
        `
      : css`
          .MuiOutlinedInput-notchedOutline {
            border: solid 1px ${props?.theme?.colors?.text}!important;
          }
        `}

  @media (max-height: 850px) {
    input {
      height: 100px;
    }
  }
`;

export const FormInputs = styled(TextField)`
  min-width: 500px;
  min-height: 100px;

  label {
    ${(props: ThemeProps) =>
      props?.theme?.title === "dark"
        ? css`
            color: ${props?.theme?.colors?.primary}!important;
          `
        : css`
            color: ${props?.theme?.colors?.secondary}!important;
          `}
  }

  ${(props: ThemeProps) =>
    props?.theme?.title === "dark"
      ? css`
          .MuiOutlinedInput-notchedOutline {
            border: solid 1px ${props?.theme?.colors?.text}!important;
          }
        `
      : css`
          .MuiOutlinedInput-notchedOutline {
            border: solid 1px ${props?.theme?.colors?.text}!important;
          }
        `}
`;
