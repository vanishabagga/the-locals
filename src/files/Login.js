import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
  };

  const navigate = useNavigate();

  const handleMain1Click = () => {
    navigate('/main1');
  };

  return (
    <div>
      <Navbar showMainLink={false} showDropdown={false} />
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '200px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', fontFamily: 'Righteous, cursive', color: 'pink'}}>Welcome Local!</h1>
        <div style={{ backgroundColor: '#1b9db7', padding: '20px', width: '300px', marginTop: '20px', borderRadius: '10px' }}>
          <h2 style={{ textAlign: 'center', color: 'white' }}>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label style={{ color: 'white' }}>Username:</Form.Label>
              <Form.Control type="text" value={username} onChange={handleUsernameChange} required />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label style={{ color: 'white' }}>Password:</Form.Label>
              <Form.Control type="password" value={password} onChange={handlePasswordChange} required />
            </Form.Group>
            <Button variant="primary"  style={{ marginTop: '1em', backgroundColor: '#f1356d', border: 'none' }}  type="submit" onClick={handleMain1Click}>
              Login
            </Button>
          </Form>
        </div>
        <div style={{ marginTop: '1em' }}>
          <p style={{ color: 'black' }}>
            Don't have an account?{' '}
            <RouterLink to="/signup" style={{ color: '#f1356d' }}>
              Sign up
            </RouterLink>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;








