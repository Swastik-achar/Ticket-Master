import React from "react";
import { connect } from "react-redux";
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { startRemoveEmployees } from "../../Actions/employeesActions";
import Swal from "sweetalert2";

function employees(props) {
  const handleAddEmployee = () => {
    props.history.push(`/employees/new`);
  };
  const handleRemove = emp => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        props.dispatch(startRemoveEmployees(emp._id));
      }
    });
  };
  const handleShow = emp => {
    props.history.push(`/employees/${emp._id}`);
  };
  return (
    <div
      style={{ color: "black", marginTop: "70px"}}
      align="center"
    >
      {props.employees && (
        <div style={{ fontSize: "20px" }}>
          <h2>Employees-{props.employees.length}</h2>
          <TableContainer
            style={{ width: "80%", fontSize: "20px" }}
            component={Paper}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h3>Id</h3>
                  </TableCell>
                  <TableCell>
                    <h3>Name</h3>
                  </TableCell>
                  <TableCell>
                    <h3>Email</h3>
                  </TableCell>
                  <TableCell>
                    <h3>Mobile</h3>
                  </TableCell>
                  <TableCell>
                    <h3>Department</h3>
                  </TableCell>
                  <TableCell>
                    <h3>Actions</h3>
                  </TableCell>
                  <TableCell>
                    <h3>Remove</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.employees.map((employee, i) => {
                  return (
                    <TableRow
                      key={employee._id}
                      style={
                        i % 2
                          ? { backgroundColor: "" }
                          : { backgroundColor: "#FFF7E6" }
                      }
                    >
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell>{employee.mobile}</TableCell>
                      <TableCell>{employee.department.name}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleShow(employee)}
                        >
                          Show
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleRemove(employee)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <button
            style={{
              border: "none",
              backgroundColor: "white",
              color: "#0040ff",
              fontSize: "16px"
            }}
            onClick={handleAddEmployee}
          >
            Add Employee
          </button>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    employees: state.employees
  };
};
export default connect(mapStateToProps)(employees);
