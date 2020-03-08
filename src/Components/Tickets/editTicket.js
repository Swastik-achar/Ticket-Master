import React from "react";
import Form from "./Form";
import { startUpdateTicket } from "../../Actions/ticketsAction";
import { connect } from "react-redux";

function editTicket(props) {
  const id= props.match.params.id;
  const handleSubmit = formData => {
    const redirect = () => {
      if (formData) {
        return props.history.push(`/tickets/${props.match.params.id}`);
      }
    };
    props.dispatch(startUpdateTicket(formData, id,redirect));
  };
  return (
    <div style={{color:'black',marginTop:'70px'}}>
      <h2>Edit Ticket</h2>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default connect()(editTicket);
