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
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  img {
    width: 300px;
    padding-left: 32px;
  }
`;

export const Secction2 = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: rebeccapurple; */
  justify-content: flex-end;
  gap: 40px;
  align-items: center;
  width: 100%;
  margin: 32px 64px 0px 0px;

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
