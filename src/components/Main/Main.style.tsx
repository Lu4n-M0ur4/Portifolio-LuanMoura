import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100vw;
  height: calc(100% - 100px);
  overflow: hidden;

  article {
    margin: 168px 0 0 38px;
    color: ${(props) => props.theme.colors.text};

    h1 {
      width: 540px;
      height: 192px;

      font-size: 96px;
      letter-spacing: 6px;

      animation: typerContent 0.9s 0.2s backwards;
    }

    p {
      font-size: 24px;
    }

    button {
      width: 285px;
      height: 68px;
      background: none;
      border: solid 2px ${(props) => props.theme.colors.text};
      border-radius: 16px;

      color: ${(props) => props.theme.colors.text};
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }

  div {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 50%;
    padding-bottom: 20px;
    animation: personImg 1.4s 0.2s backwards;

    img {
      width: auto;
      height: 75%;
      backdrop-filter: brightness(#fff 120%);
      border-radius: 50%;
      padding-top:-4px;
      border-bottom: #000000f6 solid 1.5px ;
      background-image: linear-gradient(90deg,#9572FC  0%,
    #43b6e7  50.52%,
    #5c80e2  100% );
    
  

      /* -webkit-filter: blur(10px); */
    /* -moz-filter: blur(10px); */
    /* -o-filter: blur(10px); */
    /* -ms-filter: blur(10px); */
    /* filter: blur(10px); */
    }
  }

  @keyframes personImg {
    from {
      opacity: 0;
      transform: translateY(1000px);
    }

    to {
      opacity: 1;
      transform: translatey(3);
    }
  }
  @keyframes typerContent {
    from {
      opacity: 0;
      transform: translatex(-1000px);
    }

    to {
      opacity: 1;
      transform: translatey(3);
    }
  }
`;
