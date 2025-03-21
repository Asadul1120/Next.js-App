"use client";
import TableComponent from "@/app/components/TableComponent";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    fetch("https://dblsorting.onrender.com/employers/today")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getFormattedDate() {
    const date = new Date();
    return date.toLocaleDateString("en-GB").replace(/\//g, "-");
  }

  function getFormattedTime() {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center mt-5">
        <h1 className="text-danger">Error</h1>
        <h2>{error.name}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Dashboard</h1>

      <div className="d-flex justify-content-between p-3 bg-light shadow-sm rounded">
        <h5>
          <strong>Shift:</strong> 1
        </h5>
        <h5>
          <strong>Date:</strong> {getFormattedDate()}
        </h5>
        <h5>
          <strong>Time :</strong> {currentTime}
        </h5>
      </div>

      {users.length > 0 ? (
        <TableComponent employees={users} />
      ) : (
        <div className="alert alert-warning text-center mt-4">
          <h4>No schedule for today.</h4>
        </div>
      )}
    </div>
  );
}
