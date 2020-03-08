const customerInitialState = [];

const customerReducer = (state = customerInitialState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER": {
      console.log('hi')
      return [...state].concat(action.payload);
    }
    case "UPDATE_CUSTOMER": {
      return state.map(cust => {
        console.log(cust._id)
        if (cust._id === action.payload._id) {
          return action.payload ;
        }else{
          return {...cust}
        }
      });
    }
    case 'REMOVE_CUSTOMER':{
      return [...state].filter(cust=>cust._id!==action.payload._id)
    }
    default: {
      return [...state];
    }
  }
};
export default customerReducer;
