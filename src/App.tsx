import React from "react";
import { parseConnection } from "src/parse/initializeParse";
import RoutesTable from "./routes/RoutesTable";

parseConnection();

function App() {
  return <RoutesTable />;
}

export default App;
