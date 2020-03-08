import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { startAddCustomer } from "../../Actions/customerAction";
import { connect } from "react-redux";

class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: ""
    };
  }
  handleBack = () => {
    this.props.history.push("/users/customer");
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile
    };
    const redirect = () => {
      return this.props.history.push("/users/customer");
    };
    this.props.dispatch(startAddCustomer(formData, redirect));
  };
  render() {
    return (
      <div style={{ marginTop: "100px", color: "black" }}>
        <h1>Add Customer</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Enter Name"
            required
            id="standard-required"
            type="text"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            style={{ width: "65%" }}
          />
          <br />
          <br />
          <br />
          <TextField
            label="Enter Email"
            type="email"
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
            style={{ width: "65%" }}
          />
          <br />
          <br />
          <br />
          <TextField
            required
            id="standard-required"
            label="Enter Phone Number"
            type="text"
            onChange={this.handleChange}
            name="mobile"
            value={this.state.mobile}
            style={{ width: "65%" }}
          />
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
        </form>
        <button
          style={{
            border: "none",
            backgroundColor: "white",
            color: "#0040ff",
            fontSize: "16px"
          }}
          onClick={this.handleBack}
        >
          Back
        </button>
      </div>
    );
  }
}

export default connect()(AddCustomer);
