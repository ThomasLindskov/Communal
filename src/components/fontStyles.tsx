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
    background-color: ${theme.colors.risk};
  }
`;

export default GlobalStyles;
