import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
class Registration extends Component {
  state = {
    account: {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    firstname: Joi.string()
      //.alphanum()
      .required(),
    lastname: Joi.string()
      //.alphanum()
      .required(),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required(),
    password: Joi.string().required()
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert("Registration is Successfull!");
    this.props.history.replace("/login");

    //console.log(this.username.current.value);
    const errors = {};
    //const { firstname, lastname, email, password } = this.state.account;
    //console.log(firstname);
    //console.log(lastname);
    //console.log(email);
    // console.log(password);
    const account = this.state.account;
    //const options = { abortEarly: false };
    // const result = Joi.validate(account, this.schema, options);
    //if (firstname.trim() === "") errors.firstname = "Firstname is required";
    //if (lastname.trim() === "") errors.lastname = "Lastname is required";
    //if (email.trim() === "") errors.email = "Email is required";
    //if (password.trim() === "") errors.password = "Password is required";
    //console.log(errors);
    // console.log(result);
    //this.setState({ errors });
    // console.log(result.error.details);
    /*for (let item of result.error.details) {
      console.log(item);
      console.log(item.path[0]);
      console.log(item.message);
      errors[item.path[0]] = item.message;
      this.setState({ errors });
    }*/
  };

  /* handleInputField = event => {
    const account = this.state.account;
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value);
    account[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ account: account });
  };*/
  handleInputField = event => {
    const account = {};
    const errors = {};
    const { name, value } = event.currentTarget;
    //account[event.currentTarget.name] = account[event.currentTarget.value];
    account[name] = value;
    this.setState({ account });

    //validation
    const obj = { [name]: value };
    const sch = { [name]: this.schema[name] };

    console.log(Joi.validate(obj, sch));
    const result = Joi.validate(obj, sch);
    if (result.error !== null) {
      errors[name] = result.error.details[0].message;
      this.setState({ errors });
    } else {
      //alert("You have registered successfully!");
      //this.props.history.replace("/login");
      this.setState({ errors });
    }
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleFormSubmit}
          className="w-50 mx-auto mt-5 pt-0 bg-info"
        >
          <p className="h3 bg-primary text-white text-center p-3">
            Registration Form
          </p>
          <div className="form-group">
            <Input
              inputName="firstname"
              value={this.state.account.firstname}
              type="text"
              handleInputField={this.handleInputField}
              label="Firstname"
              error={this.state.errors.firstname}
            />
          </div>
          <div className="form-group">
            <Input
              inputName="lastname"
              value={this.state.account.lastname}
              type="text"
              handleInputField={this.handleInputField}
              label="Lastname"
              error={this.state.errors.lastname}
            />
          </div>
          <div className="form-group">
            <Input
              inputName="email"
              value={this.state.account.email}
              type="email"
              handleInputField={this.handleInputField}
              label="Email ID"
              error={this.state.errors.email}
            />
          </div>
          <div className="form-group">
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
            <button type="submit" className="btn btn-primary btn-block p-3">
              Register
            </button>
          </div>
          <div>
            <small className="text-center">
              Click{" "}
              <Link to="/login">
                <em>here</em>
              </Link>{" "}
              to login
            </small>
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;
