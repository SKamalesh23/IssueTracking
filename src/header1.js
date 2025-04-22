/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
// import { useDispatch} from 'react-redux';
import './header.css';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import i1 from './IMAGES/images.png';

const Header1 = () => {
  const navigate = useNavigate();
  // const info = useSelector((state) => state.infos.infos); // Ensure correct path to 'infos'
  // console.log("info-->", info);

  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleClick = () => {
    navigate('/');
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // useEffect(()=>{
  //   console.log("infoooos--->>>>",info);
  // })

  return (
    <><div className='hi'>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <img src={i1} height={20} alt="Logo" />
            <a className="navbar-brand" href="#">&nbsp;GitLab</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/body">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <div className="nav-link btn" variant="primary" onClick={toggleSidebar}>
                    <i className="fa-solid fa-user"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        <Modal show={showModal} onHide={handleClose} style={{ height: "300px" }}>
          <Modal.Header closeButton>
            <Modal.Title>Sign out?</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: "100px", overflow: "hidden" }}>
            Are you sure you want to Sign out?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
        {showSidebar && (
          <div className="sidebar">
            <button className="close-btn" onClick={toggleSidebar}>×</button>
            <h2>User Menu</h2>
            <ul>
              <li><i className="fa-solid fa-circle-user" style={{ color: "#6E6E6E", fontSize: "200px" }}></i></li><br />
              {/* <li><Link to="/profile">{info.userId1}</Link></li> */}
              <li><Link to="/">Sign out</Link></li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header1;
