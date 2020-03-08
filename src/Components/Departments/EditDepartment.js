import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { startUpdateDepartment } from "../../Actions/departmentsAction";

class EditDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.departments && props.departments.name
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.name
    };
    const id = this.props.match.params.id;
    const redirect = () => {
      return this.props.history.push(`/departments/${id}`);
    };
    this.props.dispatch(startUpdateDepartment(formData, redirect, id));
  };
  render() {
    return (
      <div style={{ marginLeft: "220px", marginTop: "100px", color: "black" }}>
        <h1 style={{ color: "	#000000" }}>Edit Department</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Department"
            required
            type="text"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
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
    );
  }
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    departments: state.departments.find(dep => dep._id == id)
  };
};
export default connect(mapStateToProps)(EditDepartment);
