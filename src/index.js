/* Importing necessary module, function, components, style etc. */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/* Creating Virtual DOM */
const root = ReactDOM.createRoot(document.getElementById("root"));

/* Rendering the JSX */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
