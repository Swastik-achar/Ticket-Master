// import React from "react";
// import {TableContainer,Table,TableHead,TableRow,TableCell} from '@material-ui/core'
// import { Table } from "@material-ui/core";

// function Completed(props) {
//   return (
//     <div>
//       <h2>
//         Tickets-
//         {this.props.tickets.filter(tckt => tckt.isResolved == true).length}
//       </h2>
//       <TableContainer style={{ width: "80%" }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>
//                 <h2>Code No</h2>
//               </TableCell>
//               <TableCell>
//                 <h2>Customer</h2>
//               </TableCell>
//               <TableCell>
//                 <h2>Department</h2>
//               </TableCell>
//               <TableCell>
//                 <h2>Employees</h2>
//               </TableCell>
//               <TableCell>
//                 <h2>Message</h2>
//               </TableCell>
//               <TableCell>
//                 <h2>Priority</h2>
//               </TableCell>
//               <TableCell>
//                 <h2>Actions</h2>
//               </TableCell>
//               <TableCell>
//                 <h2>Remove</h2>
//               </TableCell>
//               <TableCell>
//                 <h2>Not Complete</h2>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {this.props.tickets.map(
//               ticket =>
//                 ticket.isResolved && (
//                   <TableRow key={ticket.code}>
//                     <TableCell>{ticket.code}</TableCell>
//                     {this.props.customer.length !== 0 && (
//                       <TableCell>
//                         {
//                           this.props.customer.find(
//                             cust => cust._id == ticket.customer
//                           ).name
//                         }
//                       </TableCell>
//                     )}
//                     {this.props.departments.length !== 0 && (
//                       <TableCell>
//                         {
//                           this.props.departments.find(
//                             dep => dep._id == ticket.department
//                           ).name
//                         }
//                       </TableCell>
//                     )}
//                     {this.props.employees.length !== 0 && (
//                       <TableCell>
//                         {ticket.employees.length > 0 &&
//                           ticket.employees.map((emp, i) => {
//                             return (
//                               <span>
//                                 {" "}
//                                 {
//                                   this.props.employees.find(
//                                     employee =>
//                                       employee._id == ticket.employees[i]._id
//                                   ).name
//                                 }
//                               </span>
//                             );
//                           })}
//                       </TableCell>
//                     )}
//                     <TableCell>{ticket.message}</TableCell>
//                     <TableCell>{ticket.priority}</TableCell>
//                     <TableCell>
//                       <Button
//                         // style={{ marginLeft: "490px" }}
//                         variant="contained"
//                         color="primary"
//                         onClick={() => this.handleShow(ticket)}
//                       >
//                         Show
//                       </Button>
//                     </TableCell>
//                     <TableCell>
//                       <Button
//                         variant="contained"
//                         color="secondary"
//                         onClick={() => this.handleRemove(ticket)}
//                       >
//                         Remove
//                       </Button>
//                     </TableCell>
//                     <TableCell>
//                       <input
//                         type="checkbox"
//                         checked={ticket.isResolved}
//                         onChange={() => this.handleCheckBox(ticket)}
//                       />
//                     </TableCell>
//                   </TableRow>
//                 )
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// export default Completed;
