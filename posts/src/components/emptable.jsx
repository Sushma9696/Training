import React, { Component } from "react";
import FormRegEmp from "./formregemp";
import FormUpdEmp from "./formupdemp";

const EmpTable = props => {
  const employees = props.employees;
  console.log(props.getEmp);
  return (
    <div>
      <table className="table">
        <thead className="bg-success">
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>EmailId</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody className="bg-info">
          {employees.map(emp => (
            <tr>
              <td>{emp.empId}</td>
              <td>{emp.empName}</td>
              <td>{emp.empEmail}</td>
              <td>{emp.empDept}</td>
              <td>
                <button
                  data-toggle="modal"
                  data-target="#exampleModalScrollable"
                  className="btn btn-secondary"
                  onClick={() => props.getEmp(emp.empId)}
                >
                  Update
                </button>

                <div
                  class="modal fade"
                  id="exampleModalScrollable"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalScrollableTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-scrollable"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5
                          class="modal-title"
                          id="exampleModalScrollableTitle"
                        >
                          Employee--Details
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <FormUpdEmp
                          employee={props.employee}
                          handleInputField={props.handleInputField}
                        />
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={props.updateEmp}
                          class="btn btn-primary"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => props.deleteEmp(emp.empId)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpTable;
