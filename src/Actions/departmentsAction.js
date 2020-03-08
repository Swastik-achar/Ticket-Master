import axios from "../config/axios";
import Swal from "sweetalert2";

export const addDepartment = department => {
  return {
    type: "ADD_DEPARTMENT",
    payload: department
  };
};

export const startGetDepartment = () => {
  return dispatch => {
    axios
      .get("/departments", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const departments = response.data;
        dispatch(addDepartment(departments));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const startAddDepartment = formData => {
  return dispatch => {
    axios
      .post("/departments", formData, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const data = response.data;
        if (response.data.hasOwnProperty("errors")) {
          Swal.fire("error", `${response.data.errors.name.message}`, "error");
        } else {
          Swal.fire('Yay..!',`Successfully created ${data.name} department`,'success')
          dispatch(addDepartment(data));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const removeDepartment = data => {
  return {
    type: "REMOVE_DEPT",
    payload: data
  };
};
export const startRemoveDepartment = id => {
  return dispatch => {
    axios
      .delete(`/departments/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const data = response.data;
        Swal.fire('Done',`Successfully deleted ${data.name} department`,'success')
        dispatch(removeDepartment(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const updateDepartment = data => {
  return {
    type: "UPDATE_DEPT",
    payload: data
  };
};
export const startUpdateDepartment = (formData, redirect, id) => {
  return dispatch => {
    axios
      .put(`departments/${id}`, formData, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const data = response.data;
        Swal.fire('Yay..!!',`Successfully updated the ${data.name} department`,'success')
        dispatch(updateDepartment(data));
        redirect()
      })
      .catch(err => {
        console.log(err);
      });
  };
};
