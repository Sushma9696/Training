import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
/*class FormRegEmp extends Component {
  state = {
    account: {
      empId: "",
      empName: "",
      email: "",
      dept: ""
    },
    errors: {}
  };*/

/* schema = {
    empId: Joi.number()
      .integer()
      //.alphanum()
      .required(),
    empName: Joi.string()
      //.alphanum()
      .required(),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required(),
    dept: Joi.string().required()
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //const account = this.state.account;
  };

  handleInputField = event => {
    const account = {};
    const errors = {};
    const { name, value } = event.currentTarget;
    //account[event.currentTarget.name] = account[event.currentTarget.value];
    account[name] = value;
    this.setState({ account });
    /*
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
    }*/
//};

const FormRegEmp = ({
  empId,
  empName,
  empEmail,
  empDept,
  handleInputField,
  addEmp
}) => {
  return (
    <div className="bg-info">
      <form onSubmit={addEmp} className="w-50 mx-auto mt-5 pt-0">
        <p className="h3 bg-primary text-white text-center p-3">
          Add Employee Details
        </p>
        <div className="form-group">
          <Input
            inputName="empId"
            value={empId}
            type="number"
            handleInputField={handleInputField}
            label="EmployeeID"
            //error={thempId}
          />
        </div>
        <div className="form-group">
          <Input
            inputName="empName"
            value={empName}
            type="text"
            handleInputField={handleInputField}
            label="EmployeeName"
            //error={this.state.errors.empName}
          />
        </div>
        <div className="form-group">
          <Input
            inputName="empEmail"
            value={empEmail}
            type="email"
            handleInputField={handleInputField}
            label="Email ID"
            //error={this.state.errors.email}
          />
        </div>
        <div className="form-group">
          <Input
            inputName="empDept"
            value={empDept}
            type="text"
            handleInputField={handleInputField}
            label="Department"
            //error={this.state.errors.dept}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary btn-block p-3">
            Add
          </button>
        </div>
        <div>
          <small>
            Click{" "}
            <a href="/empD">
              <em>here</em>
            </a>{" "}
            to view details
          </small>
        </div>
      </form>
    </div>
  );
};

export default FormRegEmp;
