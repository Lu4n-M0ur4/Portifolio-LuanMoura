import { Contato } from "../../components/Contato/Contato";
import { Header } from "../../components/Header/Header";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { LayoutNotPage } from "../layoutNot/LayoutNotPage";


export const ContactPage: React.FC = () => {
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
      <Contato/>
    </>
  );
};
