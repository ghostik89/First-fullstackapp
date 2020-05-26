import React, { useState } from "react";

export const Form = () => {
  const [lead, setLead] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (е) => setLead({ [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("sub");
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add Lead Form</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={onChange}
            value={lead.name}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={onChange}
            value={lead.email}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="message"
            name="message"
            onChange={onChange}
            value={lead.message}
          />
        </div>
        <div className="form-group">
          <button type="submit" onSubmit={onSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
