import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Components/theme";
import FontStyles from "./Components/fontStyles";
import { InputField } from "./Components/InputField";
import { Button } from "./Components/Button";

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
