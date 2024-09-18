import { createGlobalStyle } from "styled-components";
// import LatoLight from '../assets/fonts/Lato-Light.ttf'
// import LatoRegular from '../assets/fonts/Lato-Regular.ttf'
// import LatoSemiBold from '../assets/fonts/Lato-Bold.ttf'
// import LatoBold from '../assets/fonts/Lato-Black.ttf'
// import DelaGothicOne from '../assets/fonts/DelaGothicOne-Regular.ttf'
// import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf'
// import OatmealProTRIALRegular from '../assets/fonts/OatmealProTRIAL-Regular.otf'
import { fonts } from "./theme";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-font-color: #2a2a30;
    --primary: #016FF0;
    --secondary: #F7F9FC;
    --primary-font-color: #2A2A30;
    --textSecondary: #717171;
    --background: #FDFEFF;
    --stroke: #E9EDF1;
    --button: "#A9AAC2";
    --icons-btn: "#A9AAC2";
    --gradient: 'linear-gradient(67deg, rgba(0, 199, 255, 0.06) 0%, rgba(0, 76, 233, 0.06) 100%)';
    --white: #fff;
    --black: #000;
    
  }

  /*  */
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    /* font-family: 'Lato-Regular'; */
    background: #fff;
    font-synthesis: none;
  }
 
`;
