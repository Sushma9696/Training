import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import "./App.css";
import ListGroup from "./components/listgroup";
import Book from "./components/book";
import Books from "./components/books";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import PageNotFound from "./components/page-not-found";
import BookDetails from "./components/bookdetails";
function App() {
  return (
    <div>
      <NavBar />

      <Switch>
        <Route path="/books" exact component={Books} />

        <Route path="/books/:id?" component={BookDetails} />

        <Route path="/login" component={Login} />

        <Route path="/page-not-found" component={PageNotFound} />

        <Route component={PageNotFound} />

        <Route path="/page-not-found" />
      </Switch>
    </div>
  );
}

export default App;
