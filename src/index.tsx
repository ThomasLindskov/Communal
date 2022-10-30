import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/fontStyles";
import { theme } from "./components/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);
