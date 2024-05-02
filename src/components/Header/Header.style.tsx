import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 100px;

  color: ${(props) => props.theme.colors.text};
  font-family: sans-serif;
  font-size: 20px;

`;
export const Secction1 = styled.div`
  width: 400px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 32px 0px 0px 0px;

`;

export const ImgLogo1 = styled.img`
  width: 300px;
  padding-left: 32px;

  @media (max-width: 1221px) {
    display: none;
  }
`;
export const ImgLogo2 = styled.img`
  width: 50px;
  height: 50px;
  display: none;

  @media (max-width: 1221px) {
    display: inline;
  }
`;

export const Secction2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 40px;
  align-items: center;
  width: 100%;
  margin: 32px 64px 0px 0px;
  font-family: "Poppins", sans-serif;
      font-weight: 300;

  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 48px;
    list-style-type: none;
  }

  a {
    transition: transform 0.3s;
  }

  a:hover {
    transform: scale(1.25);
  }
`;
