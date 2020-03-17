import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "./input";

//creating ref object
const username = React.createRef();
class Login extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };
  handleFormSubmit = event => {
    event.preventDefault();
    //console.log(this.username.current.value);
    const errors = {};
    const { username, password } = this.state.account;
    console.log(username);
    console.log(password);
    if (username.trim() === "") errors.username = "Username is required";
    if (password.trim() === "") errors.password = "Password is required";
    console.log(errors);
    this.setState({ errors });
    if (username === "testuser" && password === "abc@123") {
      this.props.history.replace("/");
    } else {
      alert("Enter valid credentials!");
    }
  };
  handleInputField = event => {
    const account = this.state.account;
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value);
    account[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ account: account });
  };

  render() {
    return (
      /* <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <h4>Login Form</h4>
            <form class="mt-5">
              <div class="form-group">
                <label htmlfor="exampleInputEmail1">UserName</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Username"
                />
              </div>
              <div class="form-group">
                <label htmlfor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                style={({ backgroundColor: "orange" }, { border: "orange" })}
              >
                Login
              </button>
            </form>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>*/
      <div>
        <form
          onSubmit={this.handleFormSubmit}
          className="w-50 mx-auto mt-5 pt-0 bg-info"
        >
          <p className="h3 bg-primary text-white text-center p-3">Login Form</p>
          <div className="form-group">
            {/*<label htmlFor="username">Username</label>
            <input
              value={this.state.account.username}
              type="text"
              className="form-control"
              id="username"
              name="username"
              ref={this.username}
              onChange={this.handleInputField}
    />*/}
            <Input
              inputName="username"
              value={this.state.account.username}
              type="text"
              handleInputField={this.handleInputField}
              label="Username"
              error={this.state.errors.username}
            />
          </div>
          <div className="form-group">
            {/*<label htmlFor="password">Password</label>
            <input
              value={this.state.account.password}
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={this.handleInputField}
  />*/}
            <Input
              inputName="password"
              value={this.state.account.password}
              type="password"
              handleInputField={this.handleInputField}
              label="Password"
              error={this.state.errors.password}
            />
          </div>
          <div>
            <input
              type="submit"
              className="btn btn-primary btn-block p-3"
              onClick={() => this.props.setLogin(true)}
              value="Login"
            />
          </div>
          <div>
            <small className="text-center">
              Click{" "}
              <Link to="/register">
                <em>here</em>
              </Link>{" "}
              to Register
            </small>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
