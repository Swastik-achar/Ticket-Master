import React, { Component } from "react";
import { TextField, Select, Input, InputLabel } from "@material-ui/core";
import { connect } from "react-redux";
import { findEmployee } from "../../Selector/EmployeeSelector";
import { withRouter } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      name: props.employees ? props.employees.name : "",
      email: props.employees ? props.employees.email : "",
      mobile: props.employees ? props.employees.mobile : "",
      department: props.employees ? props.employees.department.name : ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      department: this.props.departments.find(
        dept => dept.name == this.state.department
      )._id
    };
    this.props.handleSubmit(formData);
  };
  handleBackEvent = () => {
    if (localStorage.getItem("isEdit")) {
        localStorage.removeItem('isEdit')
      this.props.history.push(`/employees/${this.props.match.params.id}`);
    } else {
      this.props.history.push(`/employees`);
    }
  };
  render() {
    return (
      <div style={{color:'black',marginTop:'70px'}}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Name"
            required
            type="text"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            style={{ width: "35%" }}
          />
          <br />
          <br />
          <TextField
            label="Email"
            required
            type="text"
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
            style={{ width: "35%" }}
          />
          <br />
          <br />
          <TextField
            label="Mobile"
            required
            type="number"
            onChange={this.handleChange}
            name="mobile"
            value={this.state.mobile}
            style={{ width: "35%" }}
          />
          <br />
          <br />
          <InputLabel htmlFor="Departments">Departments</InputLabel>
          <Select
            native
            defaultValue="none"
            input={<Input id="Departments" />}
            style={{ width: "35%" }}
            label="Department"
            placeholder="-None-"
            id="Department"
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
          >
            <option value="no value" />
            {this.props.departments.map(dept => {
              return (
                <option key={dept._id} value={dept.name}>
                  {dept.name}
                </option>
              );
            })}
          </Select>
          <br />
          <br />
          <br />
          <input
            style={{
              backgroundColor: "#767676",
              border: "none",
              width: "20%",
              height: "1.5em",
              borderRadius: "4px",
              fontSize: "25px",
              color: "white",
              marginRight: "380px"
            }}
            type="submit"
            value="Submit"
          />
          <button
            style={{
              border: "none",
              backgroundColor: "white",
              color: "#0040ff",
              fontSize: "16px"
            }}
            onClick={this.handleBackEvent}
          >
            Back
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    departments: state.departments,
    employees: findEmployee(state.employees, id)
  };
};
export default withRouter(connect(mapStateToProps)(Form));
