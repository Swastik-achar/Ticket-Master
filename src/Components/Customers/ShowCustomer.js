import React, { Component } from "react";
import { connect } from "react-redux";
import { findCustomer } from "../../Selector/CustomerSelector";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { findTickets } from "../../Selector/TicketSelector";
import { Card, CardContent, Typography } from "@material-ui/core";
import { findEmployeeCust } from "../../Selector/EmployeeSelector";

class ShowCustomer extends Component {
  constructor() {
    super();
    this.state = {
      status: false
    };
  }
  handleEdit = () => {
    this.props.history.push(
      `/users/edit/customer/${this.props.match.params.id}`
    );
  };
  handleBack = () => {
    this.props.history.push("/users/customer");
  };
  render() {
    console.log(this.props);
    return (
      <div style={{marginTop: "100px",color:'black'}}>
        {this.props.customer && (
          <div>
            <h1>Customer-{this.props.customer.email}</h1>
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                color: "#0040ff",
                fontSize: "16px"
              }}
              onClick={this.handleEdit}
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
              onClick={this.handleBack}
            >
              Back
            </button>
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Pending</Tab>
                <Tab>Completed</Tab>
              </TabList>
              <TabPanel>
                <div>
                  <h2>Tickets-{this.props.tickets.length}</h2>

                  {this.props.tickets.map(ticket => {
                    return (
                      <>
                        <Card
                          style={{
                            backgroundColor: ticket.isResolved
                              ? "green"
                              : "red",
                            width: "200px"
                          }}
                        >
                          <CardContent>
                            <Typography>Code No:{ticket.code}</Typography>
                            <Typography>
                              Customer Name:{this.props.customer.name}
                            </Typography>
                            <Typography>
                              Employees-
                              {ticket.employees.map(
                                emp1 =>
                                  this.props.employees.find(
                                    emp => emp1._id == emp._id
                                  ).name
                              )}
                            </Typography>
                            {console.log(this.props.tickets)}
                            <Typography>
                              Department-
                              {
                                this.props.departments.find(
                                  dep => dep._id == ticket.department
                                ).name
                              }
                            </Typography>
                          </CardContent>
                        </Card>
                        <br />
                        <br />
                      </>
                    );
                  })}
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  {this.props.tickets && (
                    <div>
                      <h2>
                        Tickets-
                        {
                          this.props.tickets.filter(
                            tckt => tckt.isResolved == false
                          ).length
                        }
                      </h2>
                      {this.props.tickets
                        .filter(tkt => tkt.isResolved == false)
                        .map(ticket => {
                          return (
                            <>
                              <Card
                                style={{
                                  backgroundColor: ticket.isResolved
                                    ? "green"
                                    : "red",
                                  width: "200px"
                                }}
                              >
                                <CardContent>
                                  <Typography>Code No:{ticket.code}</Typography>
                                  <Typography>
                                    Customer Name:{this.props.customer.name}
                                  </Typography>
                                  <Typography>
                                    Employees-
                                    {ticket.employees.map(
                                      emp1 =>
                                        this.props.employees.find(
                                          emp => emp1._id == emp._id
                                        ).name
                                    )}
                                  </Typography>
                                  {console.log(this.props.tickets)}
                                  <Typography>
                                    Department-
                                    {
                                      this.props.departments.find(
                                        dep => dep._id == ticket.department
                                      ).name
                                    }
                                  </Typography>
                                </CardContent>
                              </Card>
                              <br />
                              <br />
                            </>
                          );
                        })}
                    </div>
                  )}
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  {this.props.tickets && (
                    <div>
                      <h2>
                        Tickets-
                        {
                          this.props.tickets.filter(
                            tckt => tckt.isResolved == true
                          ).length
                        }
                      </h2>
                      {this.props.tickets
                        .filter(tkt => tkt.isResolved == true)
                        .map(ticket => {
                          return (
                            <>
                              <Card
                                style={{
                                  backgroundColor: ticket.isResolved
                                    ? "green"
                                    : "red",
                                  width: "200px"
                                }}
                              >
                                <CardContent>
                                  <Typography>Code No:{ticket.code}</Typography>
                                  <Typography>
                                    Customer Name:{this.props.customer.name}
                                  </Typography>
                                  <Typography>
                                    Employees-
                                    {ticket.employees.map(
                                      emp1 =>
                                        this.props.employees.find(
                                          emp => emp1._id == emp._id
                                        ).name
                                    )}
                                  </Typography>
                                  {console.log(this.props.tickets)}
                                  <Typography>
                                    Department-
                                    {
                                      this.props.departments.find(
                                        dep => dep._id == ticket.department
                                      ).name
                                    }
                                  </Typography>
                                </CardContent>
                              </Card>
                              <br />
                              <br />
                            </>
                          );
                        })}
                  
                    </div>
                  )}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        )}
        <br />
        <br />

        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  console.log(state.tickets);
  return {
    customer: findCustomer(state.customer, id),
    tickets: findTickets(state.tickets, state.customer, id),
    departments: state.departments,
    employees: state.employees
  };
};
export default connect(mapStateToProps)(ShowCustomer);
