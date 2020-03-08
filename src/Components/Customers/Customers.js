import React, { Component } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { startRemoveCustomer } from "../../Actions/customerAction";
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

class Customers extends Component {
  handleShow = customer => {
    this.props.history.push(`/users/customer/${customer._id}`);
  };

  handleAddCustomer = () => {
    this.props.history.push("/users/customers/new");
  };
  handleRemove = cust => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        this.props.dispatch(startRemoveCustomer(cust._id));
      }
    });
  };
  handleBackEvent = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div
        align="center"
        style={{ marginTop: "100px", color: "black", height: "2000px" }}
      >
        {this.props.customer.length !== 0 && (
          <div>
            <h2>Customers - {this.props.customer.length}</h2>

            <TableContainer style={{ width: "60%" }} component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <h2>Id</h2>
                    </TableCell>
                    <TableCell>
                      <h2>Name</h2>
                    </TableCell>
                    <TableCell>
                      <h2>Email</h2>
                    </TableCell>
                    <TableCell>
                      <h2>Mobile</h2>
                    </TableCell>
                    <TableCell>
                      <h2>Action</h2>
                    </TableCell>
                    <TableCell>
                      <h2>Remove</h2>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.customer.map((cust, i) => {
                    return (
                      <TableRow
                        key={i}
                        style={
                          i % 2
                            ? { backgroundColor: "" }
                            : { backgroundColor: "#FFF7E6" }
                        }
                      >
                        <TableCell>{i + 1}</TableCell>
                        <TableCell>{cust.name}</TableCell>
                        <TableCell>{cust.email}</TableCell>
                        <TableCell>{cust.mobile}</TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.handleShow(cust)}
                          >
                            Show
                          </Button>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => this.handleRemove(cust)}
                          >
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <br />
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                color: "#0040ff",
                fontSize: "16px"
              }}
              onClick={this.handleAddCustomer}
            >
              Add Customer
            </button>
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
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    customer: state.customer
  };
};
export default connect(mapStateToProps)(Customers);
