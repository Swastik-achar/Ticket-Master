import React from "react";
import { findEmployee, findEmpTickets } from "../../Selector/EmployeeSelector";
import { connect } from "react-redux";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function ShowEmployee(props) {
  const handleEdit = () => {
    localStorage.setItem("isEdit", true);
    props.history.push(`/employees/edit/${props.match.params.id}`);
  };
  const handleBackEvent = () => {
    props.history.push(`/employees`);
  };
  return (
    <div style={{color:'black',marginTop:'70px'}}>
      {props.employees && (
        <div>
          <h2>Employee-{props.employees.name}</h2>
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
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Pending</Tab>
          <Tab>Completed</Tab>
        </TabList>
        <TabPanel>
          <div>
            <h2>Tickets-{props.tickets.length}</h2>
            {props.tickets.map(ticket => {
              return (
                <>
                  <Card
                    style={{
                      backgroundColor: ticket.isResolved ? "green" : "red",
                      width: "400px"
                    }}
                  >
                    <CardContent>
                      <Typography>Code No:{ticket.code}</Typography>
                      <Typography>
                        Customer Name:{" "}
                        {
                          props.customer.find(
                            cust => cust._id == ticket.customer
                          ).name
                        }
                      </Typography>
                      <Typography>Employees-{props.employees.name}</Typography>
                      <Typography>
                        Department-
                        {props.department.find(
                          dep => dep._id == ticket.department
                        ).name}
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
          
            <h2>Tickets-{props.tickets.filter(tkt=>tkt.isResolved==false).length}</h2>
            {props.tickets.filter(tkt=>tkt.isResolved==false).map(ticket => {
              return (
                <>
                  <Card
                    style={{
                      backgroundColor: ticket.isResolved ? "green" : "red",
                      width: "400px"
                    }}
                  >
                    <CardContent>
                      <Typography>Code No:{ticket.code}</Typography>
                      <Typography>
                        Customer Name:{" "}
                        {
                          props.customer.find(
                            cust => cust._id == ticket.customer
                          ).name
                        }
                      </Typography>
                      <Typography>Employees-{props.employees.name}</Typography>
                      <Typography>
                        Department-
                        {props.department.find(
                          dep => dep._id == ticket.department
                        ).name}
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
          
            <h2>Tickets-{props.tickets.filter(tkt=>tkt.isResolved==true).length}</h2>
            {props.tickets.filter(tkt=>tkt.isResolved==true).map(ticket => {
              return (
                <>
                  <Card
                    style={{
                      backgroundColor: ticket.isResolved ? "green" : "red",
                      width: "400px"
                    }}
                  >
                    <CardContent>
                      <Typography>Code No:{ticket.code}</Typography>
                      <Typography>
                        Customer Name:{" "}
                        {
                          props.customer.find(
                            cust => cust._id == ticket.customer
                          ).name
                        }
                      </Typography>
                      <Typography>Employees-{props.employees.name}</Typography>
                      <Typography>
                        Department-
                        {props.department.find(
                          dep => dep._id == ticket.department
                        ).name}
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
  );
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    employees: findEmployee(state.employees, id),
    customer: state.customer,
    department: state.departments,
    tickets: findEmpTickets(state.tickets, id)
  };
};
export default connect(mapStateToProps)(ShowEmployee);
