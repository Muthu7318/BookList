import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./Context/books";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
  <Provider>
    <App></App>
  </Provider>
);
