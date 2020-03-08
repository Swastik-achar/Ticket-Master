const departmentsInitialState=[]

const  departmentsReducer=(state=departmentsInitialState,action)=>{
    switch(action.type){
        case "ADD_DEPARTMENT":{
            return [...state].concat(action.payload)
        }
        case 'REMOVE_DEPT':{
            return [...state].filter(dept=>dept._id!==action.payload._id)
        }
        case 'UPDATE_DEPT':{
            return [...state].map(dept=>{
                if(dept._id===action.payload._id){
                    return action.payload
                }else{
                    return {...dept}
                }
               })
                   }
        default:{
            return [...state]
        }
    }
}
export default departmentsReducer