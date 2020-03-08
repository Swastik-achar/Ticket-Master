export const findDepartment=(dep, id)=>{
    console.log(dep)
    return dep.find(dept=>dept._id==id)
}
export const findDepartment1=(department,tickets)=>{
    tickets.pop()
    console.log(tickets.map(tckt=>tckt.department))
    
    return department.find(dep=>dep._id==tickets.map(tckt=>tckt.department))
}