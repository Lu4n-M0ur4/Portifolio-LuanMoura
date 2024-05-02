import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import Router from "./routes/Router";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { theme } = useContext(GlobalContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
// }

export default App;
