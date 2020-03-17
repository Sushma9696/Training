import React, { Component } from "react";
//creating ref object
const username = React.createRef();
class Login extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };
  handleFormSubmit = event => {
    event.preventDefault();
    //console.log(this.username.current.value);
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
      <div>
        <form
          onSubmit={this.handleFormSubmit}
          className="w-50 mx-auto mt-5 pt-0"
        >
          <p className="h3 bg-secondary text-white text-center p-3">
            Login Form
          </p>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.account.username}
              type="text"
              className="form-control"
              id="username"
              name="username"
              ref={this.username}
              onChange={this.handleInputField}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.account.password}
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={this.handleInputField}
            />
          </div>
          <div>
            <input type="submit" className="btn btn-secondary btn-block p-3" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
