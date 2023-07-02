import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import UserRecs from './UserRecs'; 
import Navbar from './Navbar';
import u1 from "./u1.jpg"
import u2 from "./u2.jpg"
import u3 from "./u3.jpg"
import u4 from "./u4.jpg"
import u5 from "./u5.jpg"
import u6 from "./u6.jpg"
import u7 from "./u7.jpg"
import u8 from "./u8.jpg"
import u9 from "./u9.jpg"

const Users = () => {
  const users = [
    {
        id: 1,
        name: 'User 1',
        description: 'Description of User 1',
        imageUrl: u1,
      },
      {
        id: 2,
        name: 'User 2',
        description: 'Description of User 2',
        imageUrl: u2,
      },
      {
        id: 3,
        name: 'User 3',
        description: 'Description of User 3',
        imageUrl: u3,
      },
  
      {
        id: 4,
        name: 'User 4',
        description: 'Description of User 4',
        imageUrl: u4,
      },
  
      {
        id: 5,
        name: 'User 5',
        description: 'Description of User 5',
        imageUrl: u5,
      },
  
      {
        id: 6,
        name: 'User 6',
        description: 'Description of User 6',
        imageUrl: u6,
      },
  
      {
        id: 7,
        name: 'User 7',
        description: 'Description of User 7',
        imageUrl: u7,
      },
  
      {
        id: 8,
        name: 'User 8',
        description: 'Description of User 8',
        imageUrl: u8,
      },
  
      {
        id: 9,
        name: 'User 9',
        description: 'Description of User 9',
        imageUrl: u9,
      },
   
  ];

  const [selectedUser, setSelectedUser] = useState(null); 

  const handleUserClick = (user) => {
    setSelectedUser(user); 
  };

  return (
    <>
      <Navbar showMainLink={true} showDropdown={true} /> 
      <Container>
        <h2 style={{ textAlign: 'center' }}>Users</h2>
        <Row>
          {users.map((user) => (
            <Col key={user.id} md={4}>
              <Card
                className="mb-4"
                onClick={() => handleUserClick(user)}
                style={{ backgroundColor: 'rgba(241, 53, 109, 0.5)', border: 'none' }}
              >
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={user.imageUrl}
                    className="rounded-circle smaller-image"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.description}</Card.Text>
                  <Button variant="primary" style={{ backgroundColor: '#1b9db7', border: 'none' }}>Choose</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {selectedUser && <UserRecs selectedUser={selectedUser} />} 
      </Container>
    </>
  );
};

export default Users;

