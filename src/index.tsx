import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { theme } from "./theme";
import { initializeGQL } from "src/initializeGQL";
import { ApolloProvider } from "@apollo/client";

const apolloClient = initializeGQL();
      // Your Parse initialization configuration goes here
      const PARSE_APPLICATION_ID = 'tBlisorMwnwbaQOBjycePqPuEJo03jnMul3ipbcE';
      const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
      const PARSE_JAVASCRIPT_KEY = 'uOXwZokdRMhfAUPRQ1r7olvJDj8EmZY1vMvaOKiH';
      Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
      Parse.serverURL = PARSE_HOST_URL;
      
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <GlobalStyles />
        <App />
      </ApolloProvider>
    </ThemeProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
