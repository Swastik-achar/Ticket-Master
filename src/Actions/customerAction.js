import axios from "../config/axios";
import Swal from "sweetalert2";

export const addCustomer = data => {
  return {
    type: "ADD_CUSTOMER",
    payload: data
  };
};

export const startAddCustomer = (formData, redirect) => {
  return dispatch => {
    console.log(formData);
    axios
      .post("/customers", formData, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        if (response.data.hasOwnProperty("errors")) {
          Swal.fire("oops..", `${response.data.errors.name.message}`, "error");
        } else {
          const data = response.data;
          Swal.fire(
            "Yay great",
            `Successfully created the ${data.name} customer `,
            "success"
          );
          dispatch(addCustomer(data));
          redirect();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const startAddCustomers = () => {
  return dispatch => {
    axios
      .get("/customers", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        dispatch(addCustomer(response.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const startUpdateCustomer = (formData, redirect, props) => {
  return dispatch => {
    axios
      .put(`/customers/${props.match.params.id}`, formData, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const data = response.data;
        dispatch(updateCustomer(data));
        redirect();
      });
  };
};
export const updateCustomer = data => {
  return {
    type: "UPDATE_CUSTOMER",
    payload: data
  };
};

export const startRemoveCustomer = id => {
  return dispatch => {
    axios
      .delete(`/customers/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        if (response.data._id) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          dispatch(removeCustomer(response.data));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const removeCustomer = data => {
  return {
    type: "REMOVE_CUSTOMER",
    payload: data
  };
};
