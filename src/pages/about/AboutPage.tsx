import { Header } from "../../components/Header/Header";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import Sobre from "../../components/Sobre/Sobre";
import { LayoutNotPage } from "../layoutNot/LayoutNotPage";

export const AboutPage: React.FC = () => {
  const { toggleTheme } = useContext(GlobalContext);
  const [layout, setLayout] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1050) {
        setLayout(true);
      } else {
        setLayout(false);
      }
    }

    //testar o use memo

    window.onresize = handleResize;
  }, []);

  return layout ? (
    <>
      <LayoutNotPage />
    </>
  ) : (
    <>
      <Header toggleTheme={toggleTheme} />
      <Sobre />
    </>
  );
};
