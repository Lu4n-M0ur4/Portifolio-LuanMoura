import { createContext, useState } from "react";
import ligth from "../styles/themes/ligth";
import dark from "../styles/themes/dark";
import { DefaultTheme } from "styled-components/dist/types";

export type UserProps = {
  name: string;
  token: string;
};
export type authContextProps = {
  toggleTheme: () => void;
  theme: DefaultTheme;

};

const GlobalContext = createContext<authContextProps>({} as authContextProps);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(ligth);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : ligth);
  };




  return (
    <GlobalContext.Provider value={{ theme, toggleTheme, }}>
      <>{children}</>
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
