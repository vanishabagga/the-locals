import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Navbar from './Navbar';

const Signup1 = () => {
  const navigate = useNavigate();

  const handleMain1Click = () => {
    navigate('/main1');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Navbar showMainLink={false} showDropdown={false} />
      <div style={{ marginTop: '40px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px', fontFamily: 'Righteous, cursive', color: 'pink'}}>Welcome Local!</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className="signup">
            <div
              className="signup-section"
              style={{
                backgroundColor: '#1b9db7',
                padding: '20px',
                width: '300px',
                marginTop: '20px',
                borderRadius: '10px',
              }}
            >
              <h2 style={{ marginBottom: '1em', color: 'white' }}>Step 1</h2>
              <Form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '1em',
                  }}
                >
                  <Form.Label style={{ color: 'white' }}>Name:</Form.Label>
                  <Form.Control type="text" id="name" style={{ width: '200px' }} />
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '1em',
                  }}
                >
                  <Form.Label style={{ color: 'white' }}>Birthday:</Form.Label>
                  <Form.Control type="text" id="birthday" style={{ width: '200px' }} />
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '1em',
                  }}
                >
                  <Form.Label style={{ color: 'white' }}>City:</Form.Label>
                  <Form.Control type="text" id="city" style={{ width: '200px' }} />
                </div>
              </Form>

              <ScrollLink
                to="signup2-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button variant="primary" style={{ marginTop: '2px', backgroundColor: '#f1356d', border: 'none' }}>
                  Step 2
                </Button>
              </ScrollLink>
            </div>

            <div
              style={{
                marginTop: '1em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p style={{ color: 'black' }}>
                Already have an account?{' '}
                <Link to="/login" component={RouterLink} style={{ color: '#f1356d' }}>
                  Log in
                </Link>
                .
              </p>
            </div>

            <Element
              name="signup2-section"
              className="signup-section"
              style={{
                backgroundColor: '#1b9db7',
                padding: '20px',
                width: '300px',
                marginTop: '20px',
                borderRadius: '10px',
              }}
            >
              <h2 style={{ marginBottom: '1em', color: 'white' }}>Step 2</h2>
              <Form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '1em',
                  }}
                >
                  <Form.Label style={{ color: 'white' }}>Username:</Form.Label>
                  <Form.Control type="text" id="username" style={{ width: '200px' }} />
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '1em',
                  }}
                >
                  <Form.Label style={{ color: 'white' }}>Password:</Form.Label>
                  <Form.Control type="password" id="password" style={{ width: '200px' }} />
                </div>

                <Button
                  variant="secondary"
                  className="mb-2"
                  onClick={handleMain1Click}
                  style={{ backgroundColor: '#f1356d', border: 'none' }}
                >
                  Sign Up
                </Button>
              </Form>
            </Element>

            <div
              style={{
                marginTop: '1em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p style={{ color: 'black' }}>
                Already have an account?{' '}
                <Link to="/login" component={RouterLink} style={{ color: '#f1356d' }}>
                  Log in
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup1;












