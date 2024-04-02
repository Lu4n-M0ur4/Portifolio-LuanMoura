import { Box, styled } from "@mui/material";

export const AboutContainer = styled(Box)`
  width: 90vw;
  height: calc(100vh - 200px);
  gap: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px auto;

  background-color: red;
`;
export const BoxContent = styled(Box)`
  height: 90%;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: blue;

  hr{
    width: 80%;
    z-index: 2;
    background-color: yellow;
    height: 2px;
    rotate: 90deg;
}

`;

export const SectionResume = styled(Box)`
  height: 50%;
  width: 90%;
  background-color: aliceblue;

  display: flex;
  align-items: center;

  
`;
export const SectionEducation = styled(Box)`
  height: 40%;
  width: 90%;
  background-color: aliceblue;
`;


export const TitleBox = styled(Box)`
display: flex;
z-index: 999;
align-items: center;
justify-content: center;
width: 200%;
height: 90%;
background-color:aquamarine ;

`
