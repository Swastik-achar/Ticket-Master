export const findCustomer = (cust, id) => {
  return cust.find(customer => customer._id == id);
};
export const findCustomer1 = (customer, tickets) => {
  console.log(customer.find(cust => cust._id ),tickets.map(tckt => tckt.customer))
  return customer.find(cust => cust._id == tickets.map(tckt => tckt.customer));
};
