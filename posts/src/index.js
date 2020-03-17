import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/browser";
//import Sample from "./components/sample";

Sentry.init({
  dsn: "https://49ad774cfc7c4177a2cb28c00fbefe99@sentry.io/4465313"
});
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
