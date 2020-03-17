import React, { Component } from "react";
import Input from "./input";
const FormUpdEmp = props => {
  //console.log(id);
  const employs = props.employee;
  console.log(employs);
  console.log(employs.id);
  console.log(employs.empId);
  return (
    <div>
      <form className="w-50 mx-auto mt-5 pt-0">
        <p className="h3 bg-primary text-white text-center p-3">
          Update Employee Details
        </p>
        <div className="form-group">
          <Input
            inputName="empId"
            value={employs.empId}
            type="number"
            handleInputField={props.handleInputField}
            label="EmployeeID"
            disabled="true"
            //error={thempId}
          />
        </div>
        <div className="form-group">
          <Input
            inputName="empName"
            value={employs.empName}
            type="text"
            handleInputField={props.handleInputField}
            label="EmployeeName"

            //error={this.state.errors.empName}
          />
        </div>
        <div className="form-group">
          <Input
            inputName="empEmail"
            value={employs.empEmail}
            type="email"
            handleInputField={props.handleInputField}
            label="Email ID"

            //error={this.state.errors.email}
          />
        </div>
        <div className="form-group">
          <Input
            inputName="empDept"
            value={employs.empDept}
            type="text"
            handleInputField={props.handleInputField}
            label="Department"
            //error={this.state.errors.dept}
          />
        </div>
        <div>
          {/*<button type="submit" className="btn btn-primary btn-block p-3">
            Add
  </button>*/}
        </div>
      </form>
    </div>
  );
};

export default FormUpdEmp;
