import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");

  // ✅ REMOVE env check — you already hardcoded the key elsewhere
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});