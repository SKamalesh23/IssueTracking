import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editUser } from './issue';
import 'bootstrap/dist/css/bootstrap.css';
import './tab.css';

const AddUser = ({ onClose, editId }) => {
    const dispatch = useDispatch();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const namePattern = /^[a-zA-Z]+$/;
    const users = useSelector(state => state.users); // Retrieve users from Redux store
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({}); // State for error messages

    useEffect(() => {
        if (editId !== null) {
            const userToEdit = users.users.find(user => user.id === editId);
            if (userToEdit) {
                setName(userToEdit.name);
                setEmail(userToEdit.email);
                setPassword(userToEdit.password);
            }
        } else {
            setName('');
            setEmail('');
            setPassword('');
        }
    }, [editId, users.users]);

    const validateForm = () => {
        let formErrors = {};
        if (!name) {
            formErrors.name = 'Name is required.';
        } else if (!namePattern.test(name)) {
            formErrors.name = 'Name should only contain letters.';
        }

        if (!email) {
            formErrors.email = 'Email is required.';
        } else if (!emailPattern.test(email)) {
            formErrors.email = 'Enter a valid email.';
        }

        if (!password) {
            formErrors.password = 'Password is required.';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleAddUser = () => {
        if (!validateForm()) return;

        const newUser = {
            id: editId || Math.floor(Math.random() * 1000),
            name,
            email,
            password
        };

        if (editId) {
            // If editing, dispatch editUser action
            dispatch(editUser(newUser));
        } else {
            // If adding, dispatch addUser action
            dispatch(addUser(newUser));
        }

        // Reset form fields after adding or editing user
        setName('');
        setEmail('');
        setPassword('');
        setErrors({});
        onClose(); // Close the modal
    };

    return (
        <div>
            <main style={{ width: "100%" }}>
                <h2 className="mb-4 text-center">{editId ? 'Update User' : 'Add User'}</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div><br />
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div><br />
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div><br />
                    <button
                        type="button"
                        className="col-12 mx-auto btn btn-success"
                        onClick={handleAddUser}
                    >
                        {editId ? 'Update User' : 'Add User'}
                    </button>
                </form>
            </main>
        </div>
    );
};

export default AddUser;
