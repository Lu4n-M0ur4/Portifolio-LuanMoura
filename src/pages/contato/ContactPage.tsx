import { Contato } from "../../components/Contato/Contato";
import { Header } from "../../components/Header/Header";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";


export const ContactPage: React.FC = () => {
  const { toggleTheme } = useContext(GlobalContext);


  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <Contato/>
    
    </>
  );
};
