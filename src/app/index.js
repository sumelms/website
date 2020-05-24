import React from "react";
import { Normalize } from "styled-normalize";

import GlobalStyles from "./styles/global";

import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Normalize />
      <Routes />
      <GlobalStyles />
    </div>
  );
}

export default App;
