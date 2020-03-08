import React from "react";  
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./Store/configureStore";
import { Provider } from "react-redux";
import {startSetUser} from './Actions/usersAction'
import { startAddCustomers } from "./Actions/customerAction";
import {startGetDepartment} from './Actions/departmentsAction'
import {startGetEmployees} from './Actions/employeesActions'
import {startGetTickets} from './Actions/ticketsAction'


const store = configureStore();
console.log(store.getState())
store.subscribe(()=>{
  console.log(store.getState())
})

if(localStorage.getItem('token')){ 
  store.dispatch(startSetUser())
  store.dispatch(startAddCustomers())
  store.dispatch(startGetDepartment())
  store.dispatch(startGetEmployees())
  store.dispatch(startGetTickets())
}
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
