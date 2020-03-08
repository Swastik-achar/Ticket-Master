import React, { Component } from 'react'
import { findCustomer } from '../../Selector/CustomerSelector'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { TextField } from "@material-ui/core";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:props.customer ? props.customer.name:'',
            email:props.customer? props.customer.email:'',
            mobile:props.customer? props.customer.mobile:''
        }
    }
    handleBackEvent = () => {
      this.props.history.push("/customers");
    };  
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
        this.props.handleSubmit(formData)
    }
    render() {
        return (
            <div style={{marginTop: "100px",color:'black'}}>
                <form onSubmit={this.handleSubmit}>
          <TextField
            label="Enter Name"
            required
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
            required
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
        )
    }
}

const mapStateToProps=(state, props)=>{
    const id=props.match.params.id
    return{
        customer:findCustomer(state.customer,id)
    }
}

export default withRouter(connect(mapStateToProps)(Form))