import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="#">
          Movies
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {
              //  {props.isLoggedIn &&(
            }
            {props.isLoggedIn && (
              <li className="nav-item ">
                <NavLink className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            )}
            {props.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies">
                  Movies
                </NavLink>
              </li>
            )}
            {props.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/empD">
                  Employee Details
                </NavLink>
              </li>
            )}
            {props.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/post">
                  Posts
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        {!props.isLoggedIn && (
          <NavLink style={{ color: "white" }} className="nav-link" to="/login">
            Login
          </NavLink>
        )}
        {props.isLoggedIn && (
          <NavLink
            onClick={() => props.setLogin(false)}
            style={{ color: "white" }}
            className="nav-link"
            to="/logout"
          >
            Logout
          </NavLink>
        )}
        {props.isLoggedIn && (
          <NavLink
            style={{ color: "white" }}
            className="nav-link"
            to="/register"
          >
            Register
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
