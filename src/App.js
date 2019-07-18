import React from "react";
import { ResetGlobalStyle } from "styles/index";

import { HomePage } from "home/index.js";

function App() {
  return (
    <div>
      <ResetGlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;
