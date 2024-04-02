import { Header } from "../../components/Header/Header";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import Sobre from "../../components/Sobre/Sobre"
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

export const AboutPage: React.FC = () => {
  const { toggleTheme } = useContext(GlobalContext);

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <Sobre/>
    </>
  );
};
