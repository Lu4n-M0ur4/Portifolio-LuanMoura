import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
#root{  
    /* width: 100vw; */
    /* height: 100vh; */
    
}


body{
   
    background-color: ${props => props.theme.colors.background};
}



`;
