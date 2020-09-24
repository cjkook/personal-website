import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import PublicLayout from "./pages/layouts/PublicLayout.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <PublicLayout {...props} />} />
      {/* <Route path="/admin" render={(props) => <AdminLayout {...props} />} /> */}
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
