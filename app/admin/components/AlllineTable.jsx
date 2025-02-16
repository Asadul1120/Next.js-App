"use client";
import "./style.css";

import { useState, useEffect } from "react";

export default function AlllineTable({ employee }) {
  const [selectedLines, setSelectedLines] = useState({}); // চেক করা ব্যক্তিদের সংরক্ষণ
  const [selectedShifts, setSelectedShifts] = useState({}); // শিফট পরিবর্তন সংরক্ষণ
  

  // চেকবক্স পরিবর্তনের ফাংশন
  const handleCheckboxChange = (line, person) => {
    setSelectedLines((prev) => {
      const updatedPersons = prev[line]
        ? prev[line].some((p) => p.id === person.id)
          ? prev[line].filter((p) => p.id !== person.id) // আনচেক করলে রিমুভ
          : [
              ...prev[line],
              {
                ...person,
                shift: selectedShifts[person.id] ?? person.shift,
                time: true,
              },
            ] // চেক করলে time: true সহ যোগ
        : [
            {
              ...person,
              shift: selectedShifts[person.id] ?? person.shift,
              time: true,
            },
          ];

      if (updatedPersons.length === 0) {
        const { [line]: _, ...rest } = prev;
        return rest; // যদি কোনো ব্যক্তি না থাকে, তাহলে লাইন রিমুভ
      }

      return { ...prev, [line]: updatedPersons };
    });
  };

  // শিফট পরিবর্তনের ফাংশন
  const handleShiftChange = (id, value) => {
    setSelectedShifts((prev) => ({ ...prev, [id]: value }));

    // চেক করা থাকলে শিফটও আপডেট হবে
    setSelectedLines((prev) => {
      const newLines = { ...prev };

      Object.keys(newLines).forEach((line) => {
        newLines[line] = newLines[line].map((p) =>
          p.id === id ? { ...p, shift: value } : p
        );
      });

      return newLines;
    });
  };

  // সাবমিট হ্যান্ডলার (API-তে পাঠানো)

  const handleSubmit = async () => {
    const selectedData = Object.keys(selectedLines).map((line) => ({
      line,
      person: selectedLines[line],
    }));

    if (selectedData.length === 0) {
      alert("Please select at least one person.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/dashbord", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedData),
      });

      if (response.ok) {
        alert("Data submitted successfully!");
      } else {
        alert("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-lg font-bold my-4">{employee.line}</h1>
      <table className="border-collapse w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th>#</th>
            <th>Name</th>
            <th>ID</th>
            <th>Shift</th>
          </tr>
        </thead>
        <tbody>
          {employee.person.map((item, index) => (
            <tr key={item.id} className="border border-gray-300">
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(employee.line, item)}
                  checked={
                    selectedLines[employee.line]?.some(
                      (p) => p.id === item.id
                    ) || false
                  }
                />
                {index + 1}
              </td>
              <td>{item.name}</td>
              <td>{item.ID}</td>
              <td>
                <select
                  name="shift"
                  value={selectedShifts[item.id] ?? item.shift}
                  onChange={(e) => handleShiftChange(item.id, e.target.value)}
                >
                  <option value="D">D</option>
                  <option value="N">N</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleSubmit}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
}
