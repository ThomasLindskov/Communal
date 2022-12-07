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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <GlobalStyles />
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </BrowserRouter>
);
