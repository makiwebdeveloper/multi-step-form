import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MSFProvider } from "./MSFContext";

ReactDOM.render(
  <React.StrictMode>
    <MSFProvider>
      <App />
    </MSFProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
