import React from "react";
import RoutesTable from "./routes/RoutesTable";
import { initParse } from "./parse/initializeParse";

initParse();

function App() {
  return <RoutesTable />;
}

export default App;
