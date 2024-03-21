import { Context, useContext } from "react";

export const useGetComplexObject = (Context: Context<unknown>)=> {
  const object = useContext(Context);

  if (!object) {
    throw new Error("useGetObject deve ser usado dentro de um .Provider");
  }
  return object
};
