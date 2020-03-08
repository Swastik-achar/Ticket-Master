const ticketsInitialState = [];

const ticketsReducer = (state = ticketsInitialState, action) => {
  switch (action.type) {
    case "ADD_TICKET": {
      return state.concat(action.payload);
    }
    case "REMOVE_TICKET": {
      return state.filter(ticket => ticket._id !== action.payload._id);
    }
    case "UPDATE_TICKET": {
      return state.map(ticket => {
        if (ticket._id == action.payload._id) {
         // console.log(action.payload);
          return action.payload;
        } else {
          return ticket;
        }
      });
    }
    case "FIND_TICKET": {
      return action.payload
    }
    default: {
      return [...state];
    }
  }
};
export default ticketsReducer;
