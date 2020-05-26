import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { GET_LEADS } from "../../actions/types";
import { getLeads, deleteLead } from "../../actions/leads";

const Leads = ({ getLeads, deleteLead }) => {
  const leads = useSelector((state) => state.leads);

  useEffect(() => {
    getLeads();
  }, []);

  return (
    <>
      <h2>Leads</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {leads.leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button
                  onClick={() => {
                    console.log(lead.id);
                    deleteLead(lead.id);
                  }}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default connect(null, { getLeads, deleteLead })(Leads);
