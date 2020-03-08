import React, { Component } from "react";
import { connect } from "react-redux";
import {
  startAddDepartment,
  startRemoveDepartment
} from "../../Actions/departmentsAction";
import Swal from "sweetalert2";
import {
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from "@material-ui/core";

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.department
    };
    this.props.dispatch(startAddDepartment(formData));
  };
  handleShow = dep => {
    this.props.history.push(`/departments/${dep._id}`);
  };
  handleRemove = dep => {
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
        this.props.dispatch(startRemoveDepartment(dep._id));
      }
    });
  };
  render() {
    return (
      <div style={{ marginLeft: "220px", marginTop: "100px", color: "black" }}>
        {this.props.departments && (
          <div>
            <h2 style={{ color: "	#000000" }}>
              Departments-{this.props.departments.length}
            </h2>
            <br />
            <TableContainer style={{ width: "70%" }} component={Paper}>
              <Table>
                <TableBody>
                  {this.props.departments.map((department, i) => {
                    return (
                      <TableRow
                        key={department._id}
                        style={
                          i % 2
                            ? { backgroundColor: "" }
                            : { backgroundColor: "#FFF7E6" }
                        }
                      >
                        <TableCell>
                          <b style={{ marginLeft: "10px" }}>
                            {department.name}
                          </b>{" "}
                        </TableCell>
                        <TableCell>
                          <Button
                            style={{ marginLeft: "490px" }}
                            variant="contained"
                            color="primary"
                            onClick={() => this.handleShow(department)}
                          >
                            Show
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            style={{ marginTop: "auto", marginRight: "100px" }}
                            variant="contained"
                            color="secondary"
                            onClick={() => this.handleRemove(department)}
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
            <h2>Add Department</h2>
            <form onSubmit={this.handleSubmit}>
              <TextField
                label="Department"
                required
                type="text"
                onChange={this.handleChange}
                name="department"
                value={this.state.department}
                style={{ width: "35%" }}
              />
              &ensp;&ensp;
              <input
                type="submit"
                value="Add Task"
                style={{
                  border: "none",
                  fontSize: "24px",
                  opacity: "0.6",
                  transition: "0.3s",
                  padding: "14px 40px",
                  borderRadius: "4px",
                  boxShadow:
                    "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)",
                  backgroundColor: "#0040ff",
                  color: "white",
                  fontSize: "16px"
                }}
              />
            </form>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    departments: state.departments
  };
};

export default connect(mapStateToProps)(Departments);
