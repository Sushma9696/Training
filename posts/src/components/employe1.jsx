import React, { Component } from "react";
import EmpTable from "./emptable";
import FormRegEmp from "./formregemp";
class Employe1 extends Component {
  state = {
    employees: [
      {
        empId: 1,
        empName: "Ram",
        empEmail: "ram123@gmail.com",
        empDept: "IT"
      },
      {
        empId: 2,
        empName: "Sita",
        empEmail: "sita234@gmail.com",
        empDept: "IT"
      },
      {
        empId: 3,
        empName: "Gita",
        empEmail: "gita567@gmail.com",
        empDept: "non-IT"
      }
    ],
    employee: {
      empId: "",
      empName: "",
      empEmail: "",
      empDept: ""
    }
  };

  getEmp = id => {
    // const emps = this.state.employees;
    const employee = this.state.employees.filter(emp => emp.empId == id);
    //const emps = this.state.employees;
    //console.log(emps);
    this.setState({ employee: employee[0] });
    console.log(employee);
    //return empls;
  };

  updateEmp = event => {
    event.preventDefault();
    //console.log()
    //console.log("update",this.state.employee);
    const emp = this.state.employee;
    const employees = this.state.employees;
    const indx = this.state.employees.indexOf(emp);
    employees[indx] = emp;
    this.setState({ employees });
    console.log(indx);
  };

  addEmp = event => {
    event.preventDefault();
    console.log(this.state.employee);
    const employees = [...this.state.employees, this.state.employee];
    console.log(employees);
    this.setState({ employees });
  };

  deleteEmp = id => {
    const employees = this.state.employees.filter(emp => emp.empId !== id);
    this.setState({ employees });
  };

  handleInputField = event => {
    const employee = this.state.employee;
    const { name, value } = event.currentTarget;
    employee[name] = value;
    console.log("employee", employee);
    this.setState({ employee });
  };

  render() {
    return (
      <div>
        <EmpTable
          employees={this.state.employees}
          deleteEmp={this.deleteEmp}
          getEmp={this.getEmp}
          employee={this.state.employee}
          updateEmp={this.updateEmp}
          handleInputField={this.handleInputField}
        />
        <FormRegEmp
          handleInputField={this.handleInputField}
          addEmp={this.addEmp}
        />
      </div>
    );
  }
}

export default Employe1;
