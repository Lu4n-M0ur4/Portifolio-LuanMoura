import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import ligth from "./styles/themes/ligth";
import dark from "./styles/themes/dark";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Main } from "./components/Main/Main";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { logout } = useContext(GlobalContext);

  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : ligth);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Main />
        <button onClick={() => logout()}></button>
      </ThemeProvider>
    </>
  );
}
// }

export default App;
