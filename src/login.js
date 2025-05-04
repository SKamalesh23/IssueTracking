import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './login.css';

const LoginForm = ({ handleClose }) => {
  const navigate = useNavigate();
  const users = useSelector(state => state.users)
  console.log("verify-->",users);
  
  const [userId1, setUserId1] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ userId: '', password: '' });

  const validate = (userId, password) => {
    let userIdError = '';
    let passwordError = '';

    if (userId1 === '') {
      userIdError = 'User ID is required';
    } else if (userId !== 'user' && userId !== 'admin') {
      userIdError = 'Invalid User ID';
    }

    if (password === '') {
      passwordError = 'Password is required';
    } else if (userId === 'user' && password !== '1234') {
      passwordError = 'Incorrect Password for User';
    } else if (userId === 'admin' && password !== '12345') {
      passwordError = 'Incorrect Password for Admin';
    }

    setErrors({
      userId: userIdError,
      password: passwordError,
    });
  };

  const handleUserIdChange = (e) => {
    const value = e.target.value;
    setUserId1(value);
    validate(value, password);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validate(userId1, value);
  };

  const handleClick = () => {
    if (errors.userId === '' && errors.password === '') {
      console.log("userid1",userId1);
      
    //  dispatch(loadInfo(userId1));
    //   console.log("dispatch-->", dispatch(loadInfo(userId1)));

      if (userId1 === 'user' && password === '1234') {
        navigate('/body');
        handleClose();
      } else if (userId1 === 'admin' && password === '12345') {
        navigate('/admin');
        handleClose();
      }
    }
  };
  return (
    <div className="log">
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Card className="custom-card">
              <Card.Body>
                <Form>
                  <Form.Group controlId="userId">
                    <Form.Label style={{ fontWeight: 'bolder', color: 'black' }}>User ID (user or admin)</Form.Label>
                    <Form.Control
                      type="text"
                      value={userId1}
                      onChange={handleUserIdChange}
                      isInvalid={!!errors.userId1}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.userId1}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="password" className="mt-3">
                    <Form.Label style={{ fontWeight: 'bolder', color: 'black' }}>Password (1234 for user | 12345 for admin)</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="button" onClick={handleClick} className="mt-3 col-12">
                    Sign in
                  </Button>
                </Form>
                <p className="text-center">
                  <div id="v" >
                    Forget password
                  </div>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
