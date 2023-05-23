import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MantineSetup from "./components/Layout/MantineSetup";
import { SettingsProvider } from "./context/SettingsProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MantineSetup>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </MantineSetup>
);

reportWebVitals();
