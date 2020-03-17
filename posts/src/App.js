//import React from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import ListGroup from "./components/listgroup";
import Movie from "./components/movie";
import Movies from "./components/movies";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import PageNotFound from "./components/page-not-found";
import MovieDetails from "./components/movie-details";
import Registration from "./components/registration";
import Employe1 from "./components/employe1";
import Posts from "./components/posts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogOut from "./components/logout";

class App extends Component {
  state = {
    isLoggedIn: false
  };
  setLogin = status => {
    this.setState({ isLoggedIn: status });
  };
  render() {
    return (
      <div>
        <ToastContainer />
        <NavBar isLoggedIn={this.state.isLoggedIn} setLogin={this.setLogin} />
        <Switch>
          <Route path="/movies" exact component={Movies} />

          <Route path="/movies/:id?" component={MovieDetails} />

          {/*<Route path="/login" component={Login} />*/}
          <Route
            path="/login"
            render={props => (
              <Login
                isLoggedIn={this.setLogin.isLoggedIn}
                setLogin={this.setLogin}
                {...props}
              />
            )}
          />
          {
            //<Route path="/page-not-found" component={PageNotFound} />
          }
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Registration} />
          {this.state.isLoggedIn ? (
            <Route path="/empD" component={Employe1} />
          ) : (
            <Redirect to="/login" />
          )}
          <Route path="/post" component={Posts} />
          <Route path="/logout" component={LogOut} />
          <Route component={PageNotFound} />
          {
            // <Route path="/page-not-found" />
          }
        </Switch>
      </div>
    );
  }
}

export default App;
