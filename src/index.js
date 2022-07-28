import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.css";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
