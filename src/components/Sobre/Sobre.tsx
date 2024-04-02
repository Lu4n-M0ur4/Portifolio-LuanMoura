import { Box } from "@mui/material";
import {
  AboutContainer,
  BoxContent,
  TitleBox,
  SectionEducation,
  SectionResume,
} from "./Sobre.style";

export default function Sobre() {
  return (
    <AboutContainer>
      <BoxContent>
        <SectionResume>
            {/* <HrContainer> */}
            <hr/>
            {/* </HrContainer> */}
            
          <TitleBox>
          <Box>Title</Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum
            pariatur architecto tempore iste blanditiis omnis dicta, voluptas,
            ea quibusdam officia nobis cumque earum natus repellendus aut nam
            cum quam.
          </TitleBox>
        </SectionResume>
        <SectionEducation>
          <Box>Title</Box>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum
            pariatur architecto tempore iste blanditiis omnis dicta, voluptas,
            ea quibusdam officia nobis cumque earum natus repellendus aut nam
            cum quam.
          </Box>
        </SectionEducation>
      </BoxContent>
      <BoxContent>ok</BoxContent>
    </AboutContainer>
  );
}
