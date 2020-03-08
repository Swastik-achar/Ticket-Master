export const findTicket = (tickets, id) => {
  return tickets.find(tckt => tckt._id == id);
};

export const findTickets = (tickets, customers, id) => {
    const cust=customers.find(cust => cust._id == id)
  return tickets.filter(
    tckt => tckt.customer == cust._id
  );
};
export const findDepTickets=(tickets,department,id) =>{
  const dep=department.find(dep=>dep._id==id)
  return tickets.filter(tkt=>{
    return tkt.department==dep._id
  })
}