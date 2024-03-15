import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 100px;
`;
export const Secction1 = styled.div`
  width: 187px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Secction2 = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rebeccapurple;
  justify-content: space-around;
  align-items: center;
  width: 50%;

  div {
    display: flex;
    flex-direction: row;
    gap: 48px;
  }

  ul {
    display: flex;
    flex-direction: row;
   gap:48px ;
  }
`;
