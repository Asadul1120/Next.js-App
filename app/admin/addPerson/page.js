"use client";
import { useState, useEffect } from "react";

export default function AddPerson() {
 
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);




    const data = {
      name: formData.get("name"),
      ID: formData.get("ID"),
      phone: formData.get("phone"),
      line: formData.get("line"),
      group: formData.get("group"),
    };
 
    fetch("https://dblsorting.onrender.com/employers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to submit the form");
      });
    
    event.target.reset();
   
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 border rounded w-100 shadow-sm"
    >
      <div className="mb-3">
        <label htmlFor="line" className="form-label">
          Line:
        </label>
        <select name="line" id="line" className="form-select">
          <option value="1/2">Line 1/2</option>
          <option value="3">Line 3</option>
          <option value="5/6">Line 5/6</option>
          <option value="7">Line 7</option>
          <option value="8">Line 8</option>
          <option value="9">Line 9</option>
          
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="group" className="form-label">
          Group:
        </label>
        <select name="group" id="group" className="form-select">
          <option value="A">Group A</option>
          <option value="B">Group B</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ID" className="form-label">
          ID:
        </label>
        <input
          type="text"
          name="ID"
          id="ID"
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone:
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          className="form-control"
          defaultValue={"+880"}
        />
      </div>

      <button type="submit" className="btn btn-primary ">
        Submit
      </button>
    </form>
  );
}
