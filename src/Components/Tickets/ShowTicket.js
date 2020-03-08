import React from "react";
import { connect } from "react-redux";
import { findTicket } from "../../Selector/TicketSelector";
import { TableBody, TableRow, TableCell } from "@material-ui/core";
import { findCustomer1 } from "../../Selector/CustomerSelector";
import { findEmployee1 } from "../../Selector/EmployeeSelector";
import { findDepartment1 } from "../../Selector/findDepartment";

function ShowTicket(props) {
  console.log(props);
  const handleEdit = () => {
    localStorage.setItem("isEdit", true);
    props.history.push(`/tickets/edit/${props.match.params.id}`);
  };
  const handleBackEvent = () => {
    props.history.push(`/tickets`);
  };
  console.log(props.ticket);
  return (
    <div align="center" style={{color:'black',marginTop:'70px'}}>
      {props.ticket && (
        <div style={{marginTop:'80px'}}>
          <TableRow>
            <TableCell>Code Number-{props.ticket.code}</TableCell>
          </TableRow>
          {props.customer && (
            <TableRow>
              <TableCell>
                Customer-
                {
                  props.customer.find(cust => cust._id == props.ticket.customer)
                    .name
                }
              </TableCell>
            </TableRow>
          )}
          {props.employees && (
            <TableRow>
              {console.log(props.tickets)}
              <TableCell>
                Employee-
                {
                  props.employees.find(
                    emp =>
                      emp._id == props.ticket.employees.map(emp1 => emp1._id)
                  ).name
                }
              </TableCell>
            </TableRow>
          )}
          {props.departments && (
            <TableRow>
              <TableCell>
                Department-
                {
                  props.departments.find(
                    dep => dep._id == props.ticket.department
                  ).name
                }
              </TableCell>
            </TableRow>
          )}
          <TableRow>
            <TableCell>Message-{props.ticket.message}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Priority-{props.ticket.priority}</TableCell>
          </TableRow>
          <button
            style={{
              border: "none",
              backgroundColor: "white",
              color: "#0040ff",
              fontSize: "16px"
            }}
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "white",
              color: "#0040ff",
              fontSize: "16px"
            }}
            onClick={handleBackEvent}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    ticket: findTicket(state.tickets, id),
    customer: state.customer,
    employees: state.employees,
    departments: state.departments
  };
};

export default connect(mapStateToProps)(ShowTicket);
