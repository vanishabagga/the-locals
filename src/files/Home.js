import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Button } from 'react-bootstrap';
import backgroundImage from './b.jpg';

const Home = () => {
  return (
    <div className="home">
      <div
        className="section-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '20em',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(173, 216, 230, 0.8)',
            borderRadius: '10px',
            padding: '2em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '40%',
            margin: '0 auto', 
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              fontSize: '4em',
              margin: 0,
              fontFamily: 'Righteous, cursive',
              color: 'pink',
            }}
          >
            The Locals
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
            <Link
              to="/login"
              style={{
                color: '#f1356d',
                margin: '0 0.5em',
                textDecoration: 'none',
              }}
            >
              Go to login
            </Link>
            <Link
              to="/signup"
              style={{
                color: '#f1356d',
                margin: '0 0.5em',
                textDecoration: 'none',
              }}
            >
              Go to signup
            </Link>
          </div>
          <div style={{ height: '2em' }}></div>
          <ScrollLink
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button
              variant="primary"
              style={{
                backgroundColor: '#1b9db7',
                marginBottom: '20em',
                border: 'none',
                borderRadius: '10px',
              }}
              className="mb-2"
            >
              Who are we
            </Button>
          </ScrollLink>
        </div>
      </div>
      <Element
        name="about-section"
        className="about-section"
        style={{
          backgroundColor: 'pink',
          paddingTop: '25em',
          paddingBottom: '25em',
          marginTop: '1em',
        }}
      >
        <h3>Who are we?</h3>
        <p>Description about the Locals</p>
      </Element>
    </div>
  );
};

export default Home;










