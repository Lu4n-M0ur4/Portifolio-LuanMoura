import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";


export const ProjectsPage: React.FC = () => {
  const { toggleTheme } = useContext(GlobalContext);

  const PColor = styled.div`
    color: #fff;
    font-size: 40px;
  `;

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <PColor> ok </PColor>
    </>
  );
};
