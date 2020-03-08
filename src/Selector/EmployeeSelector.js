export const findEmployee = (emp, id) => {
  return emp.find(employees => employees._id == id);
};
export const findEmployee1 = (employee, ticket) => {
  return employee.find(
    emp => 
      emp._id ==
      ticket.map(tckt => tckt.employees.map(employee => employee._id))
  );
};
export const findEmpTickets=(tickets,id)=>{
return tickets.filter(ticket=>ticket.employees.find(emp=>emp._id==id))
}