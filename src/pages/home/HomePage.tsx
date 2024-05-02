import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { GlobalContext } from "../../context/GlobalContext";

export const HomePage = () => {
  const { toggleTheme } = useContext(GlobalContext);
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <Main />
    </>
  );
};
