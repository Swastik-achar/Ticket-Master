import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "../Reducer/userReducer";
import customerReducer from "../Reducer/customerReducer";
import ticketsReducer from "../Reducer/ticketsReducer";
import departmentsReducer from "../Reducer/departmentsReducer";
import employeesReducer from "../Reducer/employeesReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      customer: customerReducer,
      tickets: ticketsReducer,
      departments: departmentsReducer,
      employees: employeesReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
