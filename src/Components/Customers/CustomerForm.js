import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { findCustomer } from "../../Selector/CustomerSelector";
import { TextField } from "@material-ui/core";

function Form(props) {
  const [name, setName] = useState(props.customer ? props.customer.name : "");
  const [email, setEmail] = useState(
    props.customer ? props.customer.email : ""
  );
  const [mobile, setMobile] = useState(
    props.customer ? props.customer.mobile : ""
  );

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name,
      email,
      mobile
    };
    console.log(formData);
    props.handleSubmit(formData);
  };
  const handleBackEvent = () => {
    const id = props.match.params.id;
    props.history.push(`/users/customer/${id}`);
  };
  console.log("props", props.customer);
  return (
    <div align="center">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter Name"
          required
          type="text"
          onChange={e => setName(e.target.value)}
          name="name"
          value={name}
          style={{ width: "65%" }}
        />
        <br />
        <br />
        <br />
        <TextField
          label="Enter Email"
          required
          type="email"
          onChange={e => setEmail(e.target.value)}
          name="email"
          value={email}
          style={{ width: "65%" }}
        />
        <br />
        <br />
        <br />
        <TextField
          required
          label="Enter Phone Number"
          type="text"
          onChange={e => setMobile(e.target.value)}
          name="mobile"
          value={mobile}
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
        <button
          style={{
            border: "none",
            backgroundColor: "white",
            color: "#0040ff",
            fontSize: "16px",
            marginRight: "90px"
          }}
          onClick={handleBackEvent}
        >
          Back
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    customer: findCustomer(state.customer, id)
  };
};

export default withRouter(connect(mapStateToProps)(Form));
