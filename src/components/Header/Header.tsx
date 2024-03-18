import React, { useContext } from "react";
import Switch from "react-switch";
import { HeaderContainer, Secction2, Secction1 } from "./Header.style";
import { DefaultTheme, ThemeContext } from "styled-components";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import Brightness5Icon from "@mui/icons-material/Brightness5";

import { shade } from "polished";

interface Props {
  toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext<DefaultTheme | undefined>(ThemeContext);

  if (!theme) {
    return null;
  }

  const { colors, title } = theme;

  return (
    <HeaderContainer>
      <Secction1>
        {" "}
        <p>Logo</p>
      </Secction1>

      <Secction2>
        <div>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div>
          <p>Img Linkedin</p>
          <p>Image Github</p>
        </div>
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
