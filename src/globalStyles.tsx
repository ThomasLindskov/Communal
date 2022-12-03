import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'SF Pro';
  src: url("public/fonts/sf-pro-display_regular.woff2");
  font-weight: normal;
}
@font-face {
  font-family: 'SF Pro';
  src: url("public/fonts/sf-pro-display_bold.woff2");  
  font-weight: bolder;
}

@font-face {
  font-family: 'SF Pro';
  src: url("public/fonts/sf-pro-display_semibold.woff2");  
  font-weight: bold;
  }

  body {
    margin: 0;
    font-family: 'SF Pro', sans-serif;
    background-color: ${theme.colors.background};
  } 

  .ReactModal__Overlay {
    z-index: 1000;
  }
`;

export default GlobalStyles;
