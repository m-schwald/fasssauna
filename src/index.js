import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <GlobalStyles />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
