import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import GlobalState from "./components/context/context.jsx";

createRoot(document.getElementById("root")).render(
    <HashRouter>
      <GlobalState>
        <App />
      </GlobalState>
    </HashRouter>
);
