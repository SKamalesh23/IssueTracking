import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import IssueForm from './issueForm';
import { Modal, Button } from 'react-bootstrap';

const IssueTable = () => {
  const reports = useSelector(state => state.reports.reports); // Assuming 'reports' is your reducer name
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setEditId(null);
    setEditData(null);
  };

  const handleEdit = (id) => {
    const reportToEdit = reports.find(report => report.id === id);
    setEditId(id);
    setEditData(reportToEdit);
    setShowModal(true);
  };

  return (
    <div className="admin-content">
      <h3>Issue Status History</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Issue ID</th>
            <th>Status</th>
            <th>Comments</th>
            <th>Updated At</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {reports && reports.map(report => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.status}</td>
              <td>{report.comments}</td>
              <td>{report.date}</td>
              <td>
                <button className="btn btn-warning" onClick={() => handleEdit(report.id)}>
                <i className="fa-regular fa-pen-to-square"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button variant="primary" onClick={handleShowModal}>
        Submit Report
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? 'Update Issue' : 'Add New Issue'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <IssueForm handleClose={handleCloseModal} editId={editId} editData={editData} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default IssueTable;
