import React from "react";
import { MainContainer } from "./Main.style";
import Luan from '../../assets/1665335617663_(1)-transformed.png'


export const Main: React.FC = () => {
  return (
    <>
      <MainContainer>
        <article>
          <p>OLÀ EU SOU LUAN</p>
          <h1>DEV FULLSTACK</h1>
          <button>Veja meus projetos</button>
        </article>
        <div>
          <img src={Luan} alt="" />
        </div>
      </MainContainer>
    </>
  );
};
