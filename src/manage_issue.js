import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import SubmitIssueForm from './SubmitIssueForm.js';
import ChangeStatusModal from './ChangeStatusModal';
import { deleteIssue } from './issue'; // Adjust the path based on your project structure
import './image.css';

const Manage = () => {
    const dispatch = useDispatch();
    
    // Select issues from Redux store
    const issues = useSelector(state => state.issues.issues);
    console.log(issues);

    // State for modal visibility and selected issue
    const [showModal, setShowModal] = useState(false);
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [status, setStatus] = useState('');

    // State for hovered image
    const [hoveredImage] = useState(null);

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedIssue(null);
    };


    const handleSave = () => {
        if (selectedIssue !== null) {
            // dispatch(changeStatus(selectedIssue.index, status));
        }
        handleCloseModal();
    };

    const handleDelete = (id) => {
        dispatch(deleteIssue(id));
    };

    const Footer1 = () => (
        <footer style={{position:'fixed',bottom:0}} className="footer">
            <p>&copy; 2024 Engineering College. All rights reserved.</p>
        </footer>
    );

    const renderAttachment = (attachment) => {
        if (!attachment) return 'N/A';

        // Check if the attachment is a URL or a file
        if (typeof attachment === 'string' && (attachment.startsWith('http') || attachment.startsWith('data:image'))) {
            return (
                <img 
                    src={attachment} 
                    alt="Attachment" 
                    style={{ width: '50px', height: '30px' }} 
                    // onMouseOver={() => setHoveredImage(attachment)}
                    // onMouseOut={() => setHoveredImage(null)}
                />
            );
        }

        // If attachment is a File object
        if (attachment instanceof File) {
            const url = URL.createObjectURL(attachment);
            return (
                <img 
                    src={url} 
                    alt="Attachment" 
                    style={{ width: '100px', height: 'auto' }} 
                    // onMouseOver={() => setHoveredImage(url)}
                    // onMouseOut={() => setHoveredImage(null)}
                />
            );
        }

        return 'N/A';
    };

    return (
        <div className="container">
            <section style={{ marginTop: '20px' }}>
                <h2 style={{ textAlign: "center", color: "red" }}>Stored Issues</h2>
                <div className="table-responsive">
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th>Issue Id</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Priority</th>
                                <th>Description</th>
                                <th>Attachment</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {issues.map((issue, index) => (
                                <tr key={index}>
                                    <td>{issue.id}</td>
                                    <td>{issue.title}</td>
                                    <td>{issue.category}</td>
                                    <td>{issue.priority}</td>
                                    <td>{issue.description}</td>
                                    <td>{renderAttachment(issue.attachment)}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => handleDelete(issue.id)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer1 />
            {selectedIssue && (
                <ChangeStatusModal
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                    status={status}
                    setStatus={setStatus}
                    handleSave={handleSave}
                />
            )}
            {hoveredImage && (
                <div className="enlarged-image-overlay">
                    <img src={hoveredImage} alt="Enlarged Attachment" className="enlarged-image" />
                </div>
            )}
        </div>
    );
};

export default Manage;
