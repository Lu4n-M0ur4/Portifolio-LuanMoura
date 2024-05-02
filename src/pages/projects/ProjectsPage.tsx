import { Header } from "../../components/Header/Header";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import MultiActionAreaCard from "../../components/Card/Card";
import { MainProjectContainer } from "./Projects.style";

export const ProjectsPage: React.FC = () => {
  const { toggleTheme } = useContext(GlobalContext);

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <MainProjectContainer>
        <MultiActionAreaCard />
      </MainProjectContainer>
    </>
  );
};
