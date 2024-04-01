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
      padding-top: -4px;
      border-bottom: #000000f6 solid 1.5px;
      background-image: ${(props) =>
        props.theme.title === "dark"
          ? "linear-gradient(90deg,#C8C8C8  0%,#547AA5  50.52%,#242325 100% )"
          : "linear-gradient(90deg,#242325  0%,#C4D7F2  50.52%,#C4D7F2 100% )"};
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
