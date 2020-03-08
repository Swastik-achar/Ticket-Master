import axios from "../config/axios";
import Swal from 'sweetalert2'

export const addTicket = data => {
  return {
    type: "ADD_TICKET",
    payload: data
  };
};
export const startAddTicket = (formData, redirect) => {
  return dispatch => {
    axios
      .post("/tickets", formData, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const data = response.data;
        console.log(data);
        if (response.data.hasOwnProperty("errors")) {
          alert(response.data._message);
        } else {
          dispatch(addTicket(data));
          redirect();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const startGetTickets = () => {
  return dispatch => {
    axios
      .get("/tickets", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const data = response.data;
        console.log(data)
        dispatch(addTicket(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const removeTicket = data => {
  return {
    type: "REMOVE_TICKET",
    payload: data
  };
};

export const startRemoveTickets = id => {
  return dispatch => {
    axios
      .delete(`/tickets/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const data = response.data; 
        Swal.fire('Done',`Successfully deleted ${data.code} ticket`,'success')
        dispatch(removeTicket(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};


export const findTicket=formData=>{
  return {
    type:'FIND_TICKET',
    payload:formData
  }
}
export const updateTicket = data => {
  console.log('updated',data)
  return {
    type: "UPDATE_TICKET",
    payload: data
  };
};

export const startUpdateTicket = (formData, id, redirect) => {
  return dispatch => {
    axios
      .put(`/tickets/${id}`, formData, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const data = response.data;
        dispatch(updateTicket(data));
        redirect()
      })
      .catch(err => {
        console.log(err);
      });
  };
};