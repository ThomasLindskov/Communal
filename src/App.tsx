import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/theme";
import FontStyles from "./components/fontStyles";
import { InputField } from "./components/InputField";
import { Button } from "./components/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontStyles />
      <div className="App">
        <header className="App-header">
          <p>Mount styled components here!</p>
          <InputField
            label="Email"
            id="email"
            type="text"
            placeholder="Insert email"
          />
          <Button
            color={theme.colors.cta}
            type="button"
            onClick={() => alert("Button clicked")}
          >
            Click me!
          </Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
