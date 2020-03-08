import React, { Component } from "react";
import { TextField, Select, Input, InputLabel } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { findTicket } from "../../Selector/TicketSelector";

export class Form extends Component {
  constructor(props) {
    // );
    super(props);
    this.state = {
      code: props.tickets ? props.tickets.code : "",
      customer: props.tickets
        ? props.customers.find(cust => cust._id == props.tickets.customer).name
        : "",
      department: props.tickets
        ? props.departments.find(dep => dep._id == props.tickets.department)
            .name
        : "",
      employees: props.tickets
        ? props.employees.find(
            emp => emp._id == props.tickets.employees.map (emp2 => emp2._id)
          ).name
        : [],
      message: props.tickets ? props.tickets.message : "",
      priority: props.tickets ? props.tickets.priority : "",
      statusHigh: false,
      statusMed: false,
      statusLow: false,
      employees: []
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      code: this.state.code,
      customer: this.props.customers.find(
        cust => cust.name == this.state.customer
      )._id,
      department: this.props.departments.find(
        dept => dept.name == this.state.department
      )._id,

      employees: this.state.employees.map(emp => {
        return { _id: emp };
      }),
      message: this.state.message,
      priority: this.state.statusHigh
        ? "High"
        : this.state.statusMed
        ? "Medium"
        : "Low"
    };
    console.log(formData);
    this.props.handleSubmit(formData);
  };
  handleRadio = e => {
    if (e.target.id == "high") {
      this.setState({ statusHigh: true });
    } else if (e.target.id == "medium") {
      this.setState({ statusMed: true });
    } else if (e.target.id == "low") {
      this.setState({ statusLow: true });
    }
  };
  handleBackEvent = () => {
    if (localStorage.getItem("isEdit")) {
      localStorage.removeItem("isEdit");
      this.props.history.push(`/tickets/${this.props.match.params.id}`);
    } else {
      this.props.history.push(`/tickets`);
    }
  };
  render() {
    return (
      <div style={{ color: "black", marginTop: "70px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Code"
            required
            type="text"
            onChange={this.handleChange}
            name="code"
            value={this.state.code}
            style={{ width: "35%" }}
          />
          <br />
          <br />
          <InputLabel htmlFor="Customers">Customers</InputLabel>
          <Select
            native
            defaultValue="select"
            input={<Input id="Customers" />}
            style={{ width: "35%" }}
            label="Customers"
            id="Customers"
            name="customer"
            value={this.state.customer}
            onChange={this.handleChange}
          >
            <option value=""></option>
            {this.props.customers.map(cust => {
              return (
                <option key={cust._id} value={cust.name}>
                  {cust.name}
                </option>
              );
            })}
          </Select>
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
          {this.props.employees && (
            <div>
              <InputLabel htmlFor="Employees">Employees</InputLabel>
              <Select
                multiple
                defaultValue="none"
                input={<Input id="Employees" />}
                style={{ width: "35%" }}
                label="Employees"
                placeholder="-None-"
                id="Employees"
                name="employees"
                value={this.state.employees}
                onChange={this.handleChange}
              >
                <option value="no value" />
                {this.state.department &&
                  this.props.employees
                    .filter(emp => emp.department.name == this.state.department)
                    .map(emp => {
                      return (
                        <option key={emp._id} value={emp._id}>
                          {emp.name}
                        </option>
                      );
                    })}
              </Select>
            </div>
          )}
          <br />
          <br />
          <TextField
            label="Message"
            required
            type="text"
            onChange={this.handleChange}
            name="message"
            value={this.state.message}
            style={{ width: "35%" }}
          />
          <br />
          <br />
          <h2>Priority</h2>
          <input
            type="radio"
            id="high"
            name="radio"
            checked={this.state.statusHigh}
            onChange={this.handleRadio}
            color="default"
          />
          High
          <br />
          <input
            type="radio"
            id="medium"
            name="radio"
            checked={this.state.statusMed}
            onChange={this.handleRadio}
            color="default"
          />
          Medium
          <br />
          <input
            type="radio"
            id="low"
            name="radio"
            checked={this.state.statusLow}
            onChange={this.handleRadio}
            color="default"
          />
          Low
          <br />
          <br />
          <input
            style={{
              backgroundColor: "#767676",
              border: "none",
              width: "8%",
              height: "1.5em",
              borderRadius: "4px",
              fontSize: "25px",
              color: "white",
              marginRight: "380px"
            }}
            type="submit"
            value="Submit"
          />
        </form>
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
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(state.departments);
  const id = props.match.params.id;
  return {
    tickets: findTicket(state.tickets, id),
    employees: state.employees,
    customers: state.customer,
    departments: state.departments
  };
};

export default withRouter(connect(mapStateToProps)(Form));
