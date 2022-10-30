import React from "react";
import { theme } from "./components/theme";
import { InputField } from "./components/InputField";
import { Button } from "./components/Button";
import RoutesTable from "./routes/RoutesTable";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <RoutesTable />
      <div className="App">
        <header className="App-header">
          <p>Mount styled components here!</p>
          <Card>
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
          </Card>
        </header>
      </div>
    </>
  );
}

export default App;
