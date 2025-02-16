"use client";

const TableComponent = ({ employee }) => {
  return (
    <div className="container mt-5">
      <h3>{employee[0].line}</h3>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col">S/L</th>
            <th scope="col">Name</th>
            <th scope="col">ID</th>
            <th scope="col">Shift</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {employee[0].person.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.ID}</td>
              <td>{item.shift}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
