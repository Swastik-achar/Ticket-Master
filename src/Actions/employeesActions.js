import axios from "../config/axios";
import Swal from 'sweetalert2'

export const addEmployees = data => {
  return {
    type: "ADD_EMP",
    payload: data
  };
};

export const startGetEmployees = () => {
  return dispatch => {
    axios
      .get("/employees", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        dispatch(addEmployees(response.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const startAddEmployees = (formData, redirect, props) => {
  return dispatch => {
    axios
      .post("/employees", formData, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const data = response.data;
        dispatch(addEmployees(data));
        redirect();
      });
  };
};

export const removeEmployees=(data)=>{
    return {
        type:"REMOVE_EMP",payload:data
    }
}

export const startRemoveEmployees=(id)=>{
    return (dispatch)=>{
        axios.delete(`/employees/${id}`,{
            headers:{
            'x-auth':localStorage.getItem('token')
            }
        })
        .then(response=>{
            const data=response.data
            Swal.fire('Done',`Successfully deleted ${data.name} employee`,'success')
            dispatch(removeEmployees(data))
        })
    }
}

export const updateEmployeee=(data)=>{
    return{
        type:'UPDATE_EMP',
        payload:data
    }
}

export const startUpdateEmployee=(formData,redirect,id)=>{
    return (dispatch)=>{
        axios.put(`/employees/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then(response=>{
            const data=response.data
            dispatch(updateEmployeee(data))
            redirect()
        })
        .catch(err=>{
            console.log(err)
        })
    }
}