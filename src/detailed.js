import React from 'react';
import { useSelector } from 'react-redux';

const IssueTable1 = () => {
  const reports = useSelector(state => state.reports.reports); // Verify the state structure
  // const [showModal, setShowModal] = useState(false);

  // const handleShowModal = () => setShowModal(true);
  // const handleCloseModal = () => setShowModal(false);

  console.log(reports); // Check the structure and contents of 'reports'

  return (
    <div className="admin-content mb-5">
      <h3>Issue Status History</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Issue ID</th>
            <th>Status</th>
            <th>Comments</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.status}</td>
              <td>{report.comments}</td>
              <td>{report.date}</td> {/* Ensure 'date' field matches */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button className="btn btn-primary" onClick={handleShowModal}>
        Update
      </button>
      <IssueForm show={showModal} handleClose={handleCloseModal} /> */}
    </div>
  );
};

export default IssueTable1;
