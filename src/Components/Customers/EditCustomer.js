import React, { Component } from "react";
import { findCustomer } from "../../Selector/CustomerSelector";
import { connect } from "react-redux";
import { startUpdateCustomer } from "../../Actions/customerAction";
import Form from "./CustomerForm";

class EditCustomer extends Component {
  handleSubmit = formData => {
    const redirect = () => {
      return this.props.history.push(
        `/users/customer/${this.props.match.params.id}`
      );
    };
    this.props.dispatch(startUpdateCustomer(formData, redirect, this.props));
  };
  render() {
    console.log(this.props);
    return (
      <div style={{ marginTop: "100px", color: "black" }}>
        <h1>Edit Customer</h1>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log("hi");
  const id = props.match.params.id;
  return {
    customer: findCustomer(state.customer, id)
  };
};
export default connect(mapStateToProps)(EditCustomer);
