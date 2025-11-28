import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import GlobalState from "./context/context.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalState>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalState>
  </BrowserRouter>
);
