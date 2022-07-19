import React from "react";
import ReactDOM from "react-dom/client";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
