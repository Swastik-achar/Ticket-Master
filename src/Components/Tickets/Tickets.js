import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  InputBase,
  InputAdornment
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  startRemoveTickets,
  startUpdateTicket
} from "../../Actions/ticketsAction";
import { lighten, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import SearchIcon from "@material-ui/icons/Search";
import PieCharts from "../../PieCharts";
import Completed from "./Completed";
let tickets;

const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    backgroundColor: lighten("#0066ff", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#0066ff"
  }
})(LinearProgress);

class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      value: 0,
      isCode: false,
      message: ""
    };
  }
  // componentWillMount() {
  //   setTimeout(() => {
  //     console.log(this.props.tickets, "comp tick");
  //     this.setState({ tickets: this.props.tickets });
  //   }, 2000);
  // }

  handleChange = e => {
    const code = String(e.target.value);
    this.setState({ message: e.target.value, isCode: true });

    // let addtickets = this.state.tickets.filter(ele =>
    //   ele.code.includes(e.target.value)
    // );

    // if (addtickets) {
    //   this.setState({
    //     tickets: addtickets
    //   });
    // }
    // if (e.target.value.length === 0) {
    //   this.setState({ tickets: this.props.tickets });
    // }
  };

  handleShow = ticket => {
    this.props.history.push(`/tickets/${ticket._id}`);
  };

  handleAddTickets = () => {
    this.props.history.push(`/tickets/new`);
  };
  handleRemove = ticket => {
    this.props.dispatch(startRemoveTickets(ticket._id));
  };
  handleCheckBox = ticket => {
    const formData = {
      isResolved: !ticket.isResolved
    };
    this.props.dispatch(startUpdateTicket(formData, ticket._id));
  };
  render() {
    this.props.tickets &&
      (this.state.message.length !== 0
        ? (tickets = this.props.tickets.filter(tkt =>
            tkt.code.includes(this.state.message)
          ))
        : (tickets = this.props.tickets));
    console.log(tickets, this.state.message);
    return (
      <div style={{ marginLeft: "100px", marginTop: "100px", color: "black" }}>
        <Tabs>
          <TabList>
            <Tab>Pending</Tab>
            <Tab>Completed</Tab>

            <InputBase
              style={{ float: "right", width: "200px" }}
              type="search"
              onChange={this.handleChange}
              name="code"
              placeholder="Code.."
              startAdornment={
                <InputAdornment>
                  <SearchIcon />
                </InputAdornment>
              }
              valu={this.state.code}
            />
          </TabList>

          <TabPanel>
            <div>
              <h2>
                Tickets-
                {
                  this.props.tickets.filter(tckt => tckt.isResolved == false)
                    .length
                }
              </h2>
              <TableContainer style={{ width: "80%" }}>
                <Table>
                  <TableHead style={{ backgroundColor: "white" }}>
                    <TableRow>
                      <TableCell>
                        <h2>Code No</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Customer</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Department</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Employees</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Message</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Priority</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Actions</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Remove</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Complete</h2>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  {tickets && (
                    <TableBody>
                      {tickets.map(
                        (ticket, i) =>
                          !ticket.isResolved && (
                            <TableRow
                              key={ticket.code}
                              style={
                                i % 2
                                  ? { backgroundColor: "#FFF7E6" }
                                  : { backgroundColor: "white" }
                              }
                            >
                              <TableCell>{ticket.code}</TableCell>
                              {this.props.customer.length !== 0 && (
                                <TableCell>
                                  {
                                    this.props.customer.find(
                                      cust => cust._id == ticket.customer
                                    ).name
                                  }
                                </TableCell>
                              )}
                              {this.props.departments.length !== 0 && (
                                <TableCell>
                                  {
                                    this.props.departments.find(
                                      dep => dep._id == ticket.department
                                    ).name
                                  }
                                </TableCell>
                              )}
                              {this.props.employees.length !== 0 && (
                                <TableCell>
                                  {ticket.employees.length > 0 &&
                                    ticket.employees.map((emp, i) => {
                                      return (
                                        <span>
                                          {" "}
                                          {
                                            this.props.employees.find(
                                              employee =>
                                                employee._id ==
                                                ticket.employees[i]._id
                                            ).name
                                          }
                                        </span>
                                      );
                                    })}
                                </TableCell>
                              )}
                              <TableCell>{ticket.message}</TableCell>
                              <TableCell>{ticket.priority}</TableCell>
                              <TableCell>
                                <Button
                                  // style={{ marginLeft: "490px" }}
                                  variant="contained"
                                  color="primary"
                                  onClick={() => this.handleShow(ticket)}
                                >
                                  Show
                                </Button>
                              </TableCell>
                              <TableCell>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={() => this.handleRemove(ticket)}
                                >
                                  Remove
                                </Button>
                              </TableCell>
                              <TableCell>
                                <input
                                  type="checkbox"
                                  checked={ticket.isResolved}
                                  onChange={() => this.handleCheckBox(ticket)}
                                />
                              </TableCell>
                            </TableRow>
                          )
                      )}
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <h2>
                Tickets-
                {
                  this.props.tickets.filter(tckt => tckt.isResolved == true)
                    .length
                }
              </h2>
              <TableContainer style={{ width: "80%" }}>
                <Table>
                  <TableHead style={{ backgroundColor: "white" }}>
                    {" "}
                    <TableRow>
                      <TableCell>
                        <h2>Code No</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Customer</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Department</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Employees</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Message</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Priority</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Actions</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Remove</h2>
                      </TableCell>
                      <TableCell>
                        <h2>Not Complete</h2>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tickets.map(
                      (ticket, i) =>
                        ticket.isResolved && (
                          <TableRow
                            key={ticket.code}
                            style={
                              i % 2
                                ? { backgroundColor: "white" }
                                : { backgroundColor: "#FFF7E6" }
                            }
                          >
                            <TableCell>{ticket.code}</TableCell>
                            {this.props.customer.length !== 0 && (
                              <TableCell>
                                {
                                  this.props.customer.find(
                                    cust => cust._id == ticket.customer
                                  ).name
                                }
                              </TableCell>
                            )}
                            {this.props.departments.length !== 0 && (
                              <TableCell>
                                {
                                  this.props.departments.find(
                                    dep => dep._id == ticket.department
                                  ).name
                                }
                              </TableCell>
                            )}
                            {this.props.employees.length !== 0 && (
                              <TableCell>
                                {ticket.employees.length > 0 &&
                                  ticket.employees.map((emp, i) => {
                                    return (
                                      <span>
                                        {" "}
                                        {
                                          this.props.employees.find(
                                            employee =>
                                              employee._id ==
                                              ticket.employees[i]._id
                                          ).name
                                        }
                                      </span>
                                    );
                                  })}
                              </TableCell>
                            )}
                            <TableCell>{ticket.message}</TableCell>
                            <TableCell>{ticket.priority}</TableCell>
                            <TableCell>
                              <Button
                                // style={{ marginLeft: "490px" }}
                                variant="contained"
                                color="primary"
                                onClick={() => this.handleShow(ticket)}
                              >
                                Show
                              </Button>
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => this.handleRemove(ticket)}
                              >
                                Remove
                              </Button>
                            </TableCell>
                            <TableCell>
                              <input
                                type="checkbox"
                                checked={ticket.isResolved}
                                onChange={() => this.handleCheckBox(ticket)}
                              />
                            </TableCell>
                          </TableRow>
                        )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </TabPanel>
        </Tabs>
        <button
          style={{
            border: "none",
            backgroundColor: "white",
            color: "#0040ff",
            fontSize: "16px"
          }}
          onClick={this.handleAddTickets}
        >
          Add Ticket
        </button>
        <h2 align="center">
          Completed{" "}
          {(
            (this.props.tickets.filter(tkt => tkt.isResolved == true).length /
              this.props.tickets.length) *
            100
          ).toFixed(2)}
          %
        </h2>
        <BorderLinearProgress
          variant="determinate"
          color="#0066ff"
          value={(
            (this.props.tickets.filter(tkt => tkt.isResolved == true).length /
              this.props.tickets.length) *
            100
          ).toFixed(2)}
        />
        <br />
        <h2 marignRight="20px">Priority Chart</h2>
        <PieCharts />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    departments: state.departments,
    employees: state.employees,
    customer: state.customer,
    tickets: state.tickets
  };
};
export default connect(mapStateToProps)(Tickets);
