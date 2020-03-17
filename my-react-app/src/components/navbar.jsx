import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../images/logo.jpg";
const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <Link className="navbar-brand" to="#">
          {/*<img
            src="C:\Users\Lenovo\Desktop\react\books-app\src\images\logo.jpg"
            alt="Books"
          />*/}
          Books
        </Link>
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
            {/*<li className="nav-item ">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
        </li>*/}
            <li className="nav-item">
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
