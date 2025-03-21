
"use client";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Link from "next/link";

const Page = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [shiftValues, setShiftValues] = useState({});
  const [otValues, setOtValues] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dblsorting.onrender.com/employers");
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const formattedDate = new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

  const handleInputChange = (userId, type, value) => {
    if (type === "shift") {
      setShiftValues((prev) => ({ ...prev, [userId]: value }));
    } else {
      setOtValues((prev) => ({ ...prev, [userId]: value }));
    }
  };

  const handleAddClick = async (userId) => {
    const payload = {
      date: formattedDate,
      shift: shiftValues[userId] || "None",
      OT: otValues[userId] || 0,
    };

    try {
      const response = await fetch(
        `https://dblsorting.onrender.com/employers/add-duty/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error(`Failed to add duty for ID: ${userId}`);

      alert("Duty added successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add duty");
    }
  };

  const handleSearch = (searchTerm) => {
    setFilteredData(
      searchTerm === "none" ? data : data.filter((user) => user.line === searchTerm)
    );
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">All Duty Attendants</h1>

      {/* Line Selection */}
      <div className="mb-3">
        <label className="form-label fw-bold fs-5 ">Select Line :</label>
        <select className="ms-3 rounded p-1" onChange={(e) => handleSearch(e.target.value)}>
          <option value="none">ALL</option>
          {["1/2", 3, "5/6", 7, 8, 9].map((line) => (
            <option key={line} value={line.toString()}>{line}</option>
          ))}
        </select>
      </div>

      {error && <p className="text-danger">{error}</p>}

      {filteredData.length > 0 ? (
        <div className="row">
          {filteredData.map((user) => (
            <div key={user._id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p><strong>ID:</strong> {user.ID}</p>
                  <p><strong>Line:</strong> {user.line}</p>
                  <p><strong>Date:</strong> {formattedDate}</p>

                  <div className="mb-3">
                    <label className="form-label">Shift</label>
                    <select
                      className="form-select"
                      onChange={(e) => handleInputChange(user._id, "shift", e.target.value)}
                    >
                      {["None", "N", "D", "A", "B", "C"].map((shift) => (
                        <option key={shift} value={shift}>{shift}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">OT</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter OT"
                      onChange={(e) => handleInputChange(user._id, "ot", e.target.value)}
                    />
                  </div>

                  <button className="btn btn-primary w-100" onClick={() => handleAddClick(user._id)}>
                    Add Duty
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h3>No data found.</h3>
          <Link className="btn btn-primary" href="/admin/addPerson">Add Person</Link>
        </div>
      )}
    </div>
  );
};

export default Page;
