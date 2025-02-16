"use client";

export default function FormPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Collect data from form inputs
    const data = {
      id: formData.get("id"),
      name: formData.get("name"),
      minID: formData.get("minID"),
      shift: formData.get("shift"),
    };

    // Send data to the API
    const response = await fetch("http://localhost:3000/form/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Form submitted successfully:", result);
      alert("Form submitted successfully!");
    } else {
      console.error("Error submitting form");
      alert("Failed to submit the form");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="id" className="form-label">ID:</label>
        <input type="number" name="id" id="id" className="form-control" required />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" name="name" id="name" className="form-control" required />
      </div>
      <div className="mb-3">
        <label htmlFor="minID" className="form-label">MinID:</label>
        <input type="number" name="minID" id="minID" className="form-control" required />
      </div>
      <div className="mb-3">
        <label htmlFor="shift" className="form-label">Shift:</label>
        <select name="shift" id="shift" className="form-select" required>
          <option value="N">N</option>
          <option value="D">D</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
  );
}
