import { Box, Card, css, styled } from "@mui/material";

import { DefaultTheme } from "styled-components/dist/types";

interface ThemeProps {
  theme: DefaultTheme;
}

export const CardContainer = styled(Box)`
  width: 90vw;
  height: calc(100vh - 200px);
  gap: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledCardMedia = styled(Card)`

  transition: transform 0.3s;

  &:hover{
    transform: scale(1.08 );
  }

`;

export const BoxTabs = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxCustom = styled(Box)`
  width: 100%;
  height: 100%;
  /* padding-top: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  ${(props: ThemeProps) =>
    props?.theme?.title === "dark"
      ? css`
          .Mui-selected {
            color: ${props?.theme?.colors?.primary}!important;
          }
          .MuiTabs-indicator {
            background: ${props?.theme?.colors?.primary}!important;
          }
        `
      : css`
          .Mui-selected {
            color: ${props?.theme?.colors?.secondary}!important;
          }
          .MuiTabs-indicator {
            background: ${props?.theme?.colors?.secondary}!important;
          }
        `};
`;
