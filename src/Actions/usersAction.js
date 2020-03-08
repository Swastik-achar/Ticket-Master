import axios from "../config/axios";
import Swal from "sweetalert2";

export const startSetUsers = (data, redirect) => {
  return () => {
    axios
      .post("users/register", data)
      .then(response => {
        if (response.data.hasOwnProperty("errors")) {
          Swal.fire('Sorry',`${response.data.message}`,'error')
          //alert(response.data.message);
        } else {
          Swal.fire('Good Job!','Your Regestration was Successfull', 'success')
          redirect();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const setUser = data => {
  return { type: "SET_USER", payload: data };
};
export const startSetUser = () => {
  return dispatch => {
    console.log(localStorage.getItem("token"));
    axios
      .get("users/account", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const data = response.data;
        dispatch(setUser(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const startValidation = (formData, redirect) => {
  return dispatch => {
    axios
      .post("users/login", formData)
      .then(response => {
        console.log('login',response.data);
        if (response.data.hasOwnProperty("error")) {
          Swal.fire('Sorry!',`${response.data.error}`,'error');
        } else {
          localStorage.setItem("token", response.data.token);
          Swal.fire("Success", "you have successfully logged in", "success");
          axios
            .get("/users/account", {
              headers: {
                "x-auth": localStorage.getItem("token")
              }
            })
            .then(response => {
              const data = response.data;
              dispatch(setUser(data));
              redirect();
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const removeUser = () => {
  return {
    type: "REMOVE_USER"
  };
};
export const startRemoveUser = () => {
  return dispatch => {
    axios
      .delete("/users/logout", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        if (response.data.notice) {
          localStorage.removeItem("token");
          Swal.fire('Great Time', `You are successfully Logged Out`,'success')
          dispatch(removeUser());
          window.location.href = "/users/login";
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
