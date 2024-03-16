import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./bg-css.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="w-[100vw] overflow-x-hidden bg-animation">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
    </div>
    <App />
  </>
);
