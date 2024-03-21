import { createContext, useState } from "react";

export type UserProps= {
name:string,
token:string
}
export type authContextProps= {
 user : UserProps|null;
 login: (user:UserProps) => void;
 logout: () =>void
}


const GlobalContext = createContext<authContextProps>({}as authContextProps);



const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps|null>(null);

  const login = (user:UserProps) => {
    setUser(user);

    console.log(user);
  };

  function logout ()  {
    console.log("logouttttt");
  }

  return (
    <GlobalContext.Provider value={{ user, login, logout }}>
      <>{children}</>
    </GlobalContext.Provider>
  );
};


export {GlobalProvider,GlobalContext}