import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { startRemoveUser } from "./Actions/usersAction";

import Register from "./Components/Register";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Account from "./Components/Account/Account";
import Customers from "./Components/Customers/Customers";
import AddCustomer from "./Components/Customers/AddCustomer";
import ShowCustomer from "./Components/Customers/ShowCustomer";
import EditCustomer from "./Components/Customers/EditCustomer";
import Departments from "./Components/Departments/Departments";
import ShowDepartment from "./Components/Departments/ShowDepartment";
import EditDepartment from "./Components/Departments/EditDepartment";
import Employees from "./Components/Employees/employees";
import AddEmployees from "./Components/Employees/AddEmployees";
import editEmployee from "./Components/Employees/editEmployee";
import ShowEmployee from "./Components/Employees/ShowEmployee";
import Tickets from "./Components/Tickets/Tickets";
import AddTickets from "./Components/Tickets/AddTickets";
import editTicket from "./Components/Tickets/editTicket";
import ShowTicket from "./Components/Tickets/ShowTicket";
import Swal from "sweetalert2";
import { ButtonGroup, Button } from "@material-ui/core";

function App(props) {
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
    }).then(result => {
      if (result.value) {
        props.dispatch(startRemoveUser());
      }
    });
  };
  return (
    <div style={{ backgroundColor: "#F2F2F2	" }}>
      <BrowserRouter>
        {Object.keys(props.user).length == 0 ? (
          <>
            <div style={{ backgroundColor: " #3f51b5", height: "90px" }}>
              <h2 style={{ color: "white" }}>Ticket Master</h2>
              <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
                style={{
                  float: "right",
                  marginTop: "-30px",
                  borderCollapse: "collapse"
                }}
              >
                <Button variant="contained" color="primary">
                  <Link
                    style={{
                      float: "right",
                      textDecoration: "none",
                      color: "white"
                    }}
                    to="/"
                  >
                    Home
                  </Link>
                </Button>
                &ensp;&ensp;
                <Button variant="contained" color="primary">
                  <Link
                    to="/users/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>
                </Button>{" "}
                &ensp;&ensp;
                <Button variant="contained" color="primary">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/users/register"
                  >
                    Register
                  </Link>
                </Button>
              </ButtonGroup>
            </div>
          </>
        ) : (
          <div style={{ backgroundColor: " #3f51b5", height: "90px" }}>
            <h2 style={{ color: "white" }}>Ticket Master</h2>
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="contained primary button group"
              style={{
                float: "right",
                marginTop: "-30px",
                borderCollapse: "collapse"
              }}
            >
              <Button variant="contained" color="primary">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white"
                  }}
                  to="/"
                >
                  Home
                </Link>
              </Button>{" "}
              &ensp;&ensp;
              <Button variant="contained" color="primary">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/users/customer"
                >
                  Customers
                </Link>
              </Button>
              &ensp;&ensp;
              <Button variant="contained" color="primary">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/departments"
                >
                  Departments
                </Link>
              </Button>
              &ensp;&ensp;
              <Button variant="contained" color="primary">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/employees"
                >
                  Employees
                </Link>
              </Button>{" "}
              &ensp;&ensp;
              <Button variant="contained" color="primary">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/tickets"
                >
                  Tickets
                </Link>
              </Button>{" "}
              &ensp;&ensp;
              <Button variant="contained" color="primary">
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/users/account"
                >
                  Account
                </Link>
              </Button>{" "}
              &ensp;&ensp;
              <Button variant="contained" color="primary">
                <Link
                  onClick={handleLogout}
                  style={{ textDecoration: "none", color: "white" }}
                  to="/users/logout"
                >
                  Logout
                </Link>
              </Button>
            </ButtonGroup>
          </div>
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/login" component={Login} />
          <Route exact path="/users/register" component={Register} />
          <Route exact path="/users/account" component={Account} />
          <Route exact path="/users/customer" component={Customers} />
          <Route path="/users/customer/:id" component={ShowCustomer} />
          <Route path="/users/customers/new" component={AddCustomer} />
          <Route
            exact
            path="/users/edit/customer/:id"
            component={EditCustomer}
          />
          <Route exact path="/departments" component={Departments} />
          <Route exact path="/departments/:id" component={ShowDepartment} />
          <Route
            exact
            path="/departments/edit/:id"
            component={EditDepartment}
          />
          <Route exact path="/employees" component={Employees} />
          <Route path="/employees/new" component={AddEmployees} />
          <Route exact path="/employees/:id" component={ShowEmployee} />
          <Route exact path="/employees/edit/:id" component={editEmployee} />
          <Route exact path="/tickets" component={Tickets} />
          <Route exact path="/tickets/new" component={AddTickets} />
          <Route exact path="/tickets/:id" component={ShowTicket} />
          <Route eaxct path="/tickets/edit/:id" component={editTicket} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(App);
