import React, { Component } from "react";
import Form from "./Form";
import { startAddTicket } from "../../Actions/ticketsAction";
import { connect } from "react-redux";

export class AddTickets extends Component {
  handleSubmit = formData => {
    const redirect = () => {
      return this.props.history.push("/tickets");
    };
    this.props.dispatch(startAddTicket(formData, redirect));
  };
  render() {
    return (
      <div style={{color:'black',marginTop:'70px'}}>
        <h2>Add Ticket</h2>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect()(AddTickets);
