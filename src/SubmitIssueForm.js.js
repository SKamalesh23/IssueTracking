import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitIssue } from './issue'; // Adjust the path based on your project structure
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from react-bootstrap

const SubmitIssueForm = ({ showModal, handleCloseModal }) => {
    const dispatch = useDispatch();
    
    // State for form fields
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('facility');
    const [priority, setPriority] = useState('low');
    const [description, setDescription] = useState('');
    const [attachment, setAttachment] = useState(null);

    // State for error messages
    const [errors, setErrors] = useState({});

    const validate = () => {
        let errors = {};
        if (!title) errors.title = "Title is required.";
        if (!description) errors.description = "Description is required.";
        if (description && description.length < 10) errors.description = "Description must be at least 10 characters.";
        // Add more validation rules as needed

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleConfirmSubmit = () => {
        if (validate()) {
            let attachmentData = null;
            // console.log("id======",id);
            const id= Math.floor(Math.random() * 1000);

            if (attachment) {
                const reader = new FileReader();
                reader.onload = () => {
                    attachmentData = reader.result;

                    console.log("idddddddd======",id);

                    dispatch(submitIssue({ id,title, category, priority, description, attachment: attachmentData }));
                    resetForm();
                    handleCloseModal();
                };
                reader.readAsDataURL(attachment);
            } else {
                dispatch(submitIssue({ id,title, category, priority, description, attachment: null }));
                resetForm();
                handleCloseModal();
            }
        }
    };

    const resetForm = () => {
        setTitle('');
        setCategory('facility');
        setPriority('low');
        setDescription('');
        setAttachment(null);
        setErrors({});
    };

    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal} style={{height:"500px"}}>
                <Modal.Header closeButton>
                    <Modal.Title>Submit an Issue</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height:"500px"}}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Issue Title</label>
                            <input
                                type="text"
                                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            /><br/>
                            {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select
                                className="form-control"
                                id="category"
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="facility">Facility</option>
                                <option value="service">Service</option>
                                <option value="academic">Academic</option>
                            </select>
                        </div><br/>
                        <div className="form-group">
                            <label htmlFor="priority">Priority</label>
                            <select
                                className="form-control"
                                id="priority"
                                name="priority"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div><br/>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                id="description"
                                name="description"
                                rows="5"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                            {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                        </div><br/>
                        <div className="form-group">
                            <label htmlFor="attachment">Attachment (optional)</label>
                            <input
                                type="file"
                                className="form-control-file"
                                id="attachment"
                                name="attachment"
                                onChange={(e) => setAttachment(e.target.files[0])}
                            />
                        </div><br/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleConfirmSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SubmitIssueForm;
