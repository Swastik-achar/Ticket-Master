import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { findDepartment } from "../../Selector/findDepartment";
import { findDepTickets } from "../../Selector/TicketSelector";

class ShowDepartment extends Component {
  handleEdit = () => {
    this.props.history.push(`/departments/edit/${this.props.match.params.id}`);
  };
  handleBackEvent = () => {
    this.props.history.push("/departments");
  };
  render() {
    if (this.props.departments) {
      console.log(this.props.departments);
    }

    return (
      <div style={{ marginLeft: "220px", marginTop: "100px",color:'black' }}>
        {this.props.departments && (
          <div>
            <h2 style={{ marginRight: "500px" }}>
              Department-{this.props.departments.name}
            </h2>
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
              onClick={this.handleBackEvent}
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
                            width: "500px"
                          }}
                        >
                          <CardContent>
                            <Typography>Code No:{ticket.code}</Typography>
                            <Typography>
                              Customer Name-
                              {
                                this.props.customer.find(
                                  cust => cust._id == ticket.customer
                                ).name
                              }
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
                            <Typography>
                              Department-{this.props.departments.name}
                            </Typography>
                            <Typography>
                              Message- {this.props.tickets.messgae}
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
                  <h2>
                    Tickets-
                    {
                      this.props.tickets.filter(tkt => tkt.isResolved == false)
                        .length
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
                              width: "500px"
                            }}
                          >
                            <CardContent>
                              <Typography>Code No:{ticket.code}</Typography>
                              <Typography>
                                Customer Name-
                                {
                                  this.props.customer.find(
                                    cust => cust._id == ticket.customer
                                  ).name
                                }
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
                              <Typography>
                                Department-{this.props.departments.name}
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
                  <h2>
                    Tickets-
                    {
                      this.props.tickets.filter(tkt => tkt.isResolved == true)
                        .length
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
                              width: "500px"
                            }}
                          >
                            <CardContent>
                              <Typography>Code No:{ticket.code}</Typography>
                              <Typography>
                                Customer Name-
                                {
                                  this.props.customer.find(
                                    cust => cust._id == ticket.customer
                                  ).name
                                }
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
                              <Typography>
                                Department-{this.props.departments.name}
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
            </Tabs>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  console.log(state.departments);
  return {
    departments: findDepartment(state.departments, id),
    customer: state.customer,
    employees: state.employees,
    tickets: findDepTickets(state.tickets, state.departments, id)
  };
};
export default connect(mapStateToProps)(ShowDepartment);
