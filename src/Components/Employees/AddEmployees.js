import React from "react";
import Form from "./Form";
import { connect } from "react-redux";
import { startAddEmployees } from "../../Actions/employeesActions";

class AddEmployees extends React.Component {
  handleSubmit = (formData) => {
    if (formData) {
        const redirect=()=>{
            return this.props.history.push(`/employees`)
        }
      this.props.dispatch(startAddEmployees(formData,redirect));
    }
  };
  render() {
    return (
      <div style={{color:'black',marginTop:'70px'}}>
        <h2>Add Employee</h2>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect()(AddEmployees);
