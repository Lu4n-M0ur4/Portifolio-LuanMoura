import { Header } from "../../components/Header/Header";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

export const AboutPage: React.FC = () => {
  const { toggleTheme } = useContext(GlobalContext);

  return (
    <>
      <Header toggleTheme={toggleTheme} />
    </>
  );
};
