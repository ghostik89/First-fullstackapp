import React from "react";

export const Form = () => {
  const [lead, setLead] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      </form>
    </div>
  );
};
