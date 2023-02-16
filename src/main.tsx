import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MultiStepFormProvider } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <MultiStepFormProvider>
      <App />
    </MultiStepFormProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
