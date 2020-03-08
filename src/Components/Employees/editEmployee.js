import React, { Component } from "react";
import Form from "./Form";
import { startUpdateEmployee } from "../../Actions/employeesActions";
import { connect } from "react-redux";

class editEmployee extends Component {
  handleSubmit = formData => {
    const id = this.props.match.params.id;
    if (formData) {
      const redirect = () => {
        return this.props.history.push(
          `/employees/${this.props.match.params.id}`
        );
      };

      this.props.dispatch(startUpdateEmployee(formData, redirect, id));
    }
  };
  render() {
    return (
      <div style={{color:'black',marginTop:'70px'}}>
        <h2>Edit Employee</h2>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect()(editEmployee);
