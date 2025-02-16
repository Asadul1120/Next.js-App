"use client";


export default function AddPerson() {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      line: formData.get("line"),
      name: formData.get("name"),
      MinID: formData.get("MinID"),
    };

    // const res = await fetch("http://localhost:3000/api/all-person", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }); 

    // if (res.ok) {
    //   const result = await res.json();
    //   console.log("Form submitted successfully:", result);
    // } else {
    //   console.error("Error submitting form");
    // }
  };
  return (
    <form onSubmit={handleSubmit} className="p-2 border rounded w-100 shadow-sm">
      <div className="mb-3">
        <label htmlFor="line" className="form-label">
          Line:
        </label>
        <select name="line" id="line" className="form-select">
          <option value="1/2">Line 1/2</option>
          <option value="7">Line 7</option>
          <option value="8">Line 8</option>
          <option value="9">Line 9</option>
          <option value="5/6">Line 5/6</option>
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
        <label htmlFor="MinID" className="form-label">
          MinID:
        </label>
        <input
          type="number"
          name="MinID"
          id="MinID"
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary ">
        Submit
      </button>
    </form>
  )
}
