
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SubmitIssueForm from './SubmitIssueForm.js';

const AnotherPage = () => {
    // Select issues from Redux store
    const issues = useSelector(state => state.issues.issues); // Assuming 'issues' is the slice of state you want to access
    console.log("new Issues==========>",issues);

    // State for modal visibility
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const renderAttachment = (attachment) => {
        if (!attachment) return 'N/A';

        // Check if the attachment is a URL or a file
        // If attachment is a URL or base64 string
        if (typeof attachment === 'string' && (attachment.startsWith('http') || attachment.startsWith('data:image'))) {
            return <img src={attachment} alt="Attachment" style={{ width: '50px', height: '30px' }} />;
        }

        // If attachment is a File object
        if (attachment instanceof File) {
            const url = URL.createObjectURL(attachment);
            return <img src={url} alt="Attachment" style={{ width: '100px', height: 'auto' }} />;
        }

        return 'N/A';
    };
    return (
        <div>
            <section style={{ marginTop: '0px' }}>
                <h2 style={{textAlign:"center",color:"red"}}>Stored Issues</h2>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="text-primary">User List</h3>
                    <button className="btn btn-success" onClick={handleClick}>SUBMIT ISSUE</button>
                </div>
                <table className="table mt-4">
                    <thead>
                        <tr>

                            <th>Issue ID</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Priority</th>
                            <th>Description</th>
                            <th>Attachment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.map((issue, index) => (
                            <tr key={index}>
                                <td>{issue.id}</td>
                                <td>{issue.title}</td>
                                <td>{issue.category}</td>
                                <td>{issue.priority}</td>
                                <td>{issue.description}</td>{console.log("attachment",issue.attachment)}
                                <td>{renderAttachment(issue.attachment)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <button className="btn btn-primary col-1" onClick={handleClick}>Add Issue</button><br/><br/><br/> */}
            </section>
            <SubmitIssueForm showModal={showModal} handleCloseModal={handleCloseModal} />
        </div>
    );
};

export default AnotherPage;
