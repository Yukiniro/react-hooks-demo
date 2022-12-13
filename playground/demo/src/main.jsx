import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppWithHook from "./AppWithHook";
import "./index.css";
import "reset-css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AppWithHook />
//   </React.StrictMode>
// );
