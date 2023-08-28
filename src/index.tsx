import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const rootNode = document.getElementById("root") as Element;

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <div className="app">Hello, React App!</div>
    <App />
  </React.StrictMode>
);
