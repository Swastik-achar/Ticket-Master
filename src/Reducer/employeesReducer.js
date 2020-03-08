const employeesInitialState=[]

const employeesReducer=(state=employeesInitialState,action)=>{
    switch(action.type){
        case 'ADD_EMP':{
            return [...state].concat(action.payload)
        }
        case 'REMOVE_EMP':{
            return [...state].filter(emp=>emp._id!==action.payload._id)
        }
        case 'UPDATE_EMP':{
            return [...state].map(emp=>{
                if(emp._id==action.payload._id){
                    return action.payload
                }else{
                    return {...emp}
                }
            })
        }
        default:{
            return [...state]
        }
    }
}
export default employeesReducer