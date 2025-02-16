"use client";

export default function TablePerson({ employee }) {
  return (
    <tbody className="text-center">
      {employee.person.map((item, index) => (
        <tr key={index}>
          <th scope="row">
            <input type="checkbox" />
            {index + 1}
          </th>
          <td>{item.name}</td>
          <td>{item.ID}</td>
          <td>
            <select name="shift" id="shift">
              <option value="N">D</option>
              <option value="N">N</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </td>
        </tr>
      ))}
      <button type="submit">Submit</button>
    </tbody>
  );
}
