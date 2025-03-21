
// const TableComponent = ({ employee }) => {

//   return (
//     <div className="container mt-5">
//       <h3></h3>
//       <table className="table table-striped table-bordered">
//         <thead className="thead-dark">
//           <tr className="text-center">
//             <th scope="col">S/L</th>
//             <th scope="col">Name</th>
//             <th scope="col">ID</th>
//             <th scope="col">Shift</th>
//             <th scope="col">Line</th>
//           </tr>
//         </thead>
//         <tbody className="text-center">
//           <tr>
//             <th scope="row">1</th>
//             <td>{employee.name}</td>
//             <td>{employee.ID}</td>
//             <td>{employee.shift}</td>
//             <td>{employee.line}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableComponent;


const TableComponent = ({ employees }) => {
  return (
    <div className="table-responsive mt-4">
      <table className="table table-hover table-bordered shadow-sm">
        <thead className="table-dark text-center">
          <tr>
            <th scope="col">S/L</th>
            <th scope="col">Name</th>
            <th scope="col">ID</th>
            <th scope="col">Shift</th>
            <th scope="col">Line</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {employees.map((employee, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{employee.name}</td>
              <td>{employee.ID}</td>
              <td>{employee.shift}</td>
              <td>{employee.line}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
