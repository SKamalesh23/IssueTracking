/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'; // Import useState from React
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './header.css';
import './login.css'; // Import the custom CSS for the modal
import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from './login'; // Import the LoginForm component
import i1 from './IMAGES/images.png';

export default function Header() {
  // const isLoggedIn = useSelector(state => state.isLoggedIn);
  const buttonText=useSelector(state => state.buttonTexts);
  console.log(buttonText);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // const handleLogout = () => {
  //   dispatch(logout()); // Dispatch the logout action
  //   // Additional logout logic if needed (clear session storage, etc.)
  // };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jacques+Francois&family=Secular+One&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div class="header" style={{position:"fixed"}}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid"><img src={i1} height={20}/>
          <a className="navbar-brand" href="#">&nbsp;GitLab</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link btn" variant="primary" onClick={handleShow}>
                    Sign in
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="abc">
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm handleClose={handleClose} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* {console.log(<LoginForm/>)} */}
      </div>
    </>
  );
}
