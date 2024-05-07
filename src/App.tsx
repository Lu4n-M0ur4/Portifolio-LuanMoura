import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import Router from "./routes/Router";
import { GlobalContext } from "./context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { theme } = useContext(GlobalContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
        <ToastContainer autoClose={3500} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
// }

export default App;
