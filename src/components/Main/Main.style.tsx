import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100vw;
  height: calc(100% - 100px);


  article {
    
    margin: 168px 0 0 38px;
    color: ${(props) => props.theme.colors.text};

    h1 {
      width: 540px;
      height: 192px;

      font-size: 96px;
      letter-spacing:6px;
      
    }
    
    p{
        font-size: 24px;
    }

    button{
        width: 285px;
        height: 68px;
        background: none;
        border: solid 2px ${(props) => props.theme.colors.text};
        border-radius:16px;

        color:${(props) => props.theme.colors.text} ;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        gap:10px


    }
  }

  div {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 50%;

    img {
      width: auto;
      height: 75%;
      backdrop-filter: brightness(#fff 120%);
    }
  }
`;
