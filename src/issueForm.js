import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addIssue, updateIssue } from './issue'; // Adjust path as per your project structure
// import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const IssueForm = ({ handleClose, editId, editData }) => {
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [status, setStatus] = useState('open');
  const [comments, setComments] = useState('');
  const [errors, setErrors] = useState({ id: '', comments: '' });

  useEffect(() => {
    if (editId !== null && editData) {
      setId(editData.id);
      setStatus(editData.status);
      setComments(editData.comments);
    } else {
      setId('');
      setStatus('open');
      setComments('');
    }
  }, [editId, editData]);

  const validateId = (value) => {
    let error = '';
    if (!value) {
      error = 'Issue ID is required';
    } else if (isNaN(value)) {
      error = 'Issue ID must be a number';
    }
    setErrors(prevErrors => ({ ...prevErrors, id: error }));
    return error === '';
  };

  const validateComments = (value) => {
    let error = '';
    if (!value) {
      error = 'Comments are required';
    }
    setErrors(prevErrors => ({ ...prevErrors, comments: error }));
    return error === '';
  };

  const handleFormSubmit = () => {
    const isIdValid = validateId(id);
    const isCommentsValid = validateComments(comments);

    if (isIdValid && isCommentsValid) {
      const date = new Date().toDateString();
      if (editId) {
        dispatch(updateIssue(editId, status, comments));
      } else {
        dispatch(addIssue(id, status, comments, date));
      }

      setId('');
      setStatus('open');
      setComments('');
      setErrors({ id: '', comments: '' });

      handleClose(); // Close the modal
    }
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="id">Issue ID</label>
        <input
          type="number"
          className={`form-control ${errors.id ? 'is-invalid' : ''}`}
          id="id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            validateId(e.target.value);
          }}
          required
        />
        {errors.id && <span className="text-danger">{errors.id}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          className="form-control"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="comments">Comments</label>
        <textarea
          className={`form-control ${errors.comments ? 'is-invalid' : ''}`}
          id="comments"
          value={comments}
          onChange={(e) => {
            setComments(e.target.value);
            validateComments(e.target.value);
          }}
          required
        />
        {errors.comments && <span className="text-danger">{errors.comments}</span>}
      </div><br/>
      <button
        type="button"
        className="btn btn-success col-12"
        onClick={handleFormSubmit}
      >
        {editId ? 'Update ' : 'Add '}
      </button>
    </form>
  );
};

export default IssueForm;
