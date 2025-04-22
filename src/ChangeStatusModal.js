import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeStatus } from './issue';

const ChangeStatusModal = ({ showModal, handleCloseModal, status, setStatus, handleSave }) => {
    const dispatch=useDispatch();
    const handleChange = (e) => {
        setStatus(e.target.value);
        dispatch(changeStatus(status));
    };

    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Issue Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" value={status} onChange={handleChange}>
                            <option value="open">Open</option>
                            <option value="closed">Closed</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ChangeStatusModal;
