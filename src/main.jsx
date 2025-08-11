import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppProvider from "./contexts/AppContext";
import "./index.css"; // Assure-toi d'importer ici ton CSS (Tailwind par ex.)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
