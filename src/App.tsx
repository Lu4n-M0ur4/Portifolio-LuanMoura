import React from "react";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import ligth from "./styles/themes/ligth";
import dark from "./styles/themes/dark";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Main } from "./components/Main/Main";

function App() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : ligth);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Main/>
      </ThemeProvider>
    </>
  );
}
// }

export default App;
