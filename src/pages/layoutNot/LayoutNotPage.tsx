import { ImgContainer } from "./LayoutNotPage.style";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Typography from "@mui/material/Typography";
import HomePageImg from "../../assets/homePagePrint.jpg.png"


export const LayoutNotPage = () => {
  return (
    <ImgContainer>
      {" "}
      <Card sx={{ maxWidth: 700, maxHeight:700, boxShadow:'rgba(172, 158, 158, 0.555) 0px 22px 70px 4px;'} }>
        <CardMedia
          sx={{ minWidth: 400, minHeight: 250 , }}
          image={HomePageImg}
          title="Home Page Examp"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{display:"flex", alignItems:'center', gap:'10px'}}>
            Desculpe <ReportProblemIcon/>
          </Typography>
          <Typography color="text.secondary">
           Ainda estamos trabalhando para layouts mobile, por hora acesse por um dispositivo desktop.
          </Typography>
        </CardContent>
       
      </Card>
    </ImgContainer>
  );
};
