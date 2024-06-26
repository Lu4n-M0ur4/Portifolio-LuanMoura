import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  justify-content: space-between;

  overflow: hidden;

  article {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    padding: 100px 0 75px 75px;
    color: ${(props) => props.theme.colors.text};

    h1 {
      max-width: 20%;
      /* height: 30%; */
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-style: normal;
      margin: 0px;

      font-size: 96px;
      letter-spacing: 6px;

      animation: typerContent 0.9s 0.2s backwards;
    }



    p {
      width: 100%;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      font-size: 24px;
      margin: 0px;
    }

    button {
      width: 285px;
      height: 68px;
      background: none;
      border: solid 2px ${(props) => props.theme.colors.text};
      border-radius: 16px;

      color: ${(props) => props.theme.colors.text};
      font-size: 24px;
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding-bottom: 20px;
    animation: personImg 1.4s 0.2s backwards;

    display: flex;
    align-items: flex-start;
    padding: 75px 75px 75px 0;
    justify-content: center;


    img {
      width: 85%;
      height: 85%;
      backdrop-filter: brightness(#fff 120%);
      border-radius: 50%;
      padding-top: -4px;
      border-bottom: #000000f6 solid 1.5px;
      background-image: ${(props) =>
        props.theme.title === "dark"
          ? "linear-gradient(90deg,#C8C8C8  0%,#547AA5  50.52%,#242325 100% )"
          : "linear-gradient(90deg,#242325  0%,#C4D7F2  50.52%,#C4D7F2 100% )"};
    }
  }

  @media (max-width: 1221px) {
    img {
      display: none;
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

export const StacksImg = styled.img`
  padding-bottom: 20px;
  animation: stackImg 1.4s 0.2s backwards;
  display: inline !important;

@keyframes stackImg {
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
