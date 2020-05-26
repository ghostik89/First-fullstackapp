import React, { useState } from "react";
import { addLead } from "../../actions/leads";
import { connect } from "react-redux";

const Form = ({ addLead }) => {
  const [lead, setLead] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => setLead({ ...lead, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = lead;
    const newLead = { name, email, message };
    console.log(newLead);
    addLead(newLead);
    setLead({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add Lead Form</h2>
      <form onSubmit={onSubmit}>
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
          <label>Message</label>
          <input
            className="form-control"
            type="message"
            name="message"
            onChange={onChange}
            value={lead.message}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addLead })(Form);
