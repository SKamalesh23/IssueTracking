import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import AddUser from './Adduser'; // Adjust the path based on your project structure
import { deleteUser } from './issue'; // Import deleteUser action
import 'bootstrap/dist/css/bootstrap.css';

function Footer1() {
    return (
        <footer style={{ position: 'fixed', bottom: 0, width: "100%" }} className="footer">
            <p>&copy; 2024 Engineering College. All rights reserved.</p>
        </footer>
    );
}

const UserList = () => {
    const users = useSelector(state => state.users); // Retrieve users from Redux store
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [editId, setEditId] = useState(null);

    const handleEdit = (id) => {
        setEditId(id);
        setShowModal(true);
    }

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    }

    const handleShowModal = () => {
        setEditId(null);
        setShowModal(true);
    }
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="admin-content">
            <br /><br />
            <main style={{ maxWidth: "900px", marginBottom: "100px" }}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="text-primary">User List</h3>
                    <button className="btn btn-success" onClick={handleShowModal}>ADD USER</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(users.users) && users.users.length > 0 ? (
                                users.users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>
                                            <button className="btn btn-warning" onClick={() => handleEdit(user.id)}><i className="fa-regular fa-pen-to-square"></i></button>&nbsp;
                                            <button className="btn btn-danger" onClick={() => handleDelete(user.id)}><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">No users found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer1 />

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{editId ? 'Edit User' : 'Add New User'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddUser onClose={handleCloseModal} editId={editId} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default UserList;
