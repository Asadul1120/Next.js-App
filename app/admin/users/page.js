"use client";

import AlllineTable from "../components/AlllineTable";
import { useEffect, useState } from "react";

function Page() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/all-person")
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
    <div>
      <h1>Admin users</h1>
      {users.map((item, index) => (
        <AlllineTable key={index} employee={item} />
      ))}
    </div>
  );
}

export default Page;
