"use client";
import TableComponent from "@/app/components/TableComponent";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://courageous-macaron-335fd4.netlify.app/api/dashbord")
      .then((res) => res.json())
      .then(setUsers)
      .catch(setError);
  }, []);

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <h2>{error.name}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!users) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-4">
      <h1>Dashboard</h1>

      <div className=" d-flex justify-content-between p-4">
        <h3> shift : 1</h3>
        <h3>Date : 27/01/2025</h3>
        <h3> Time : 9:00 AM</h3>
      </div>

      {users.map((item, index) => (
        <TableComponent key={index} employee={item} />
      ))}
    </div>
  );
}
