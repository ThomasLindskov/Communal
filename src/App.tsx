import React from "react";
import RoutesTable from "./routes/RoutesTable";
import {initializeParse} from "./parse/initializeParse";
initializeParse();

function App() {
  return <RoutesTable />;
}

export default App;
