import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { GlobalContext } from "../../context/GlobalContext";
import { LayoutNotPage } from "../layoutNot/LayoutNotPage";

export const HomePage = () => {
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
      <Main />
    </>
  );
};
