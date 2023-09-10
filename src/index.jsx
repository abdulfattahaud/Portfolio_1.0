import RouterApp from "./RouterApp.jsx";
import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);
