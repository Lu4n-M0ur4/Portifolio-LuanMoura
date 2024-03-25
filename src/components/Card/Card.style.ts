import { Box, Card, css, styled } from "@mui/material";
import { DefaultTheme } from "styled-components/dist/types";

interface ThemeProps {
  theme: DefaultTheme;
}



export const CardContainer = styled(Box)`
  width: 90vw;
  height: calc(100% - 200px);
  gap: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledCardMedia = styled(Card)({
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.03)",
  },
});
export const BoxCustom = styled(Box)`
  ${(props:ThemeProps) =>
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
