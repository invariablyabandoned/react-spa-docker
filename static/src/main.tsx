import React from "react";
import ReactDOM from "react-dom/client";
import reactLogo from "./assets/react.svg";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="App">
      <div>
        <img src={reactLogo} className="logo" alt="React logo" />
      </div>
      <h1>React in Docker Example</h1>
      <div>
        <p>This config value can only be provided at build time:</p>
        <code>{import.meta.env.VITE_WELCOME_MESSAGE}</code>
      </div>
    </div>
  </React.StrictMode>
);
