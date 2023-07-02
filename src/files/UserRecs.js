import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import x from './filler.jpg';

const UserRecs = ({ selectedUser }) => {
  const [popularSpots, setPopularSpots] = useState([]);

  const renderCarouselItems = () => {
    return popularSpots.map((spot) => (
      <Carousel.Item key={spot.id}>
        <Container>
          <Row>
            <Col md={6}>
              <img
                src={spot.imageUrl}
                alt={spot.title}
                className="d-block w-100 rounded"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div style={{ textAlign: 'left' }}>
                <h3 className="carousel-title">{spot.title}</h3>
                <p className="carousel-text">{spot.text}</p>
                <p>User: {selectedUser.name}</p>
                <div className="rating-container">
                  <span className="rating-label">Rating:</span>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, index) => (
                      <BsStarFill
                        key={index}
                        className={index < spot.rating ? 'filled' : ''}
                      />
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Button variant="primary" style={{ backgroundColor: '#f1356d', border: 'none' }} className="carousel-button">
                    Add to Itinerary
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    ));
  };

  useEffect(() => {
    const userVariations = [
      {
        userId: 1,
        spots: [
          {
            id: 1,
            title: 'Spot 1 for User 1',
            text: 'Description of spot 1 for User 1',
            imageUrl: x,
            rating: 4,
          },
          {
            id: 2,
            title: 'Spot 2 for User 1',
            text: 'Description of spot 2 for User 1',
            imageUrl: x,
            rating: 3,
          },
          {
            id: 3,
            title: 'Spot 3 for User 1',
            text: 'Description of spot 3 for User 1',
            imageUrl: x,
            rating: 4,
          },
        ],
      },
      {
        userId: 2,
        spots: [
          {
            id: 1,
            title: 'Spot 1 for User 2',
            text: 'Description of spot 1 for User 2',
            imageUrl: x,
            rating: 4,
          },
          {
            id: 2,
            title: 'Spot 2 for User 2',
            text: 'Description of spot 2 for User 2',
            imageUrl: x,
            rating: 3,
          },
          {
            id: 3,
            title: 'Spot 3 for User 2',
            text: 'Description of spot 3 for User 2',
            imageUrl: x,
            rating: 4,
          },
        ],
      },
      {
        userId: 3,
        spots: [
          {
            id: 1,
            title: 'Spot 1 for User 3',
            text: 'Description of spot 1 for User 3',
            imageUrl: x,
            rating: 3,
          },
          {
            id: 2,
            title: 'Spot 2 for User 3',
            text: 'Description of spot 2 for User 3',
            imageUrl: x,
            rating: 3,
          },
          {
            id: 3,
            title: 'Spot 3 for User 3',
            text: 'Description of spot 3 for User 3',
            imageUrl: x,
            rating: 4,
          },
        ],
      },
      {
        userId: 4,
        spots: [
          {
            id: 1,
            title: 'Spot 1 for User 4',
            text: 'Description of spot 1 for User 4',
            imageUrl: x,
            rating: 4,
          },
          {
            id: 2,
            title: 'Spot 2 for User 4',
            text: 'Description of spot 2 for User 4',
            imageUrl: x,
            rating: 3,
          },
          {
            id: 3,
            title: 'Spot 3 for User 4',
            text: 'Description of spot 3 for User 4',
            imageUrl: x,
            rating: 4,
          },
        ],
      },
      {
        userId: 5,
        spots: [
          {
            id: 1,
            title: 'Spot 1 for User 5',
            text: 'Description of spot 1 for User 5',
            imageUrl: x,
            rating: 4,
          },
          {
            id: 2,
            title: 'Spot 2 for User 5',
            text: 'Description of spot 2 for User 5',
            imageUrl: x,
            rating: 3,
          },
          {
            id: 3,
            title: 'Spot 3 for User 5',
            text: 'Description of spot 3 for User 5',
            imageUrl: x,
            rating: 4,
          },
        ],
      },
      {
        userId: 6,
        spots: [
          {
            id: 1,
            title: 'Spot 1 for User 6',
            text: 'Description of spot 1 for User 6',
            imageUrl: x,
            rating: 4,
          },
          {
            id: 2,
            title: 'Spot 2 for User 6',
            text: 'Description of spot 2 for User 6',
            imageUrl: x,
            rating: 3,
          },
          {
            id: 3,
            title: 'Spot 3 for User 6',
            text: 'Description of spot 3 for User 6',
            imageUrl: x,
            rating: 4,
          },
        ],
      },
      {
        userId: 7,
        spots: [
          {
            id: 1,
            title: 'Spot 1 for User 7',
            text: 'Description of spot 1 for User 7',
            imageUrl: x,
            rating: 4,
          },
          {
            id: 2,
            title: 'Spot 2 for User 7',
            text: 'Description of spot 2 for User 7',
            imageUrl: x,
            rating: 3,
          },
          {
            id: 3,
            title: 'Spot 3 for User 7',
            text: 'Description of spot 3 for User 7',
            imageUrl: x,
            rating: 4,
          },
        ],
      },
      {
        userId: 8,
        spots: [
          {
            id: 1,
            title: 'Spot 1 for User 8',
            text: 'Description of spot 1 for User 8',
            imageUrl: x,
            rating: 4,
          },
          {
            id: 2,
            title: 'Spot 2 for User 8',
            text: 'Description of spot 2 for User 8',
            imageUrl: x,
            rating: 3,
          },
          {
            id: 3,
            title: 'Spot 3 for User 8',
            text: 'Description of spot 3 for User 8',
            imageUrl: x,
            rating: 4,
          },
        ],
      },
      {
        userId: 9,
        spots: [
          {
            id: 1,
            title: 'Spot 1 for User 9',
            text: 'Description of spot 1 for User 9',
            imageUrl: x,
            rating: 4,
          },
          {
            id: 2,
            title: 'Spot 2 for User 9',
            text: 'Description of spot 2 for User 9',
            imageUrl: x,
            rating: 3,
          },
          {
            id: 3,
            title: 'Spot 3 for User 9',
            text: 'Description of spot 3 for User 9',
            imageUrl: x,
            rating: 4,
          },
        ],
      },
    ];

    const selectedVariation = userVariations.find(
      (variation) => variation.userId === selectedUser.id
    );

    if (selectedVariation) {
      setPopularSpots(selectedVariation.spots);
    } else {
      setPopularSpots([]);
    }
  }, [selectedUser]);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Popular spots for {selectedUser.name}</h2>
      <Carousel className="mt-4">{renderCarouselItems()}</Carousel>
    </div>
  );
};

export default UserRecs;




