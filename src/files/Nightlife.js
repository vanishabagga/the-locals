import React, { useState } from 'react';
import { Card, Container, Form, Button, Modal, Row, Col } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import f1 from './piano.webp';
import f2 from './skippa.png';
import f3 from './actinolite.png';
import f4 from './chantecler.png';
import Navbar from './Navbar';

const posts = [
  {
    id: 1,
    title: 'Piano Piano',
    description: 'Description.',
    imageUrl: f1,
    username: 'username1',
  },
  {
    id: 2,
    title: 'Skippa',
    description: 'Description',
    imageUrl: f2,
    username: 'username2',
  },
  {
    id: 3,
    title: 'Actinolite',
    description: 'Description',
    imageUrl: f3,
    username: 'username3',
  },
  {
    id: 4,
    title: 'Chantecler',
    description: 'Description',
    imageUrl: f4,
    username: 'username4',
  },
];

const Nightlife = () => {
  const [ratings, setRatings] = useState({});
  const [overallRating, setOverallRating] = useState(0);
  const [priceRange, setPriceRange] = useState(0);
  const [showFilter, setShowFilter] = useState(false);

  const handleRatingChange = (postId, rating) => {
    setRatings((prevRatings) => ({ ...prevRatings, [postId]: rating }));
  };

  const calculateOverallRating = () => {
    const ratingSum = Object.values(ratings).reduce((sum, rating) => sum + rating, 0);
    const ratingCount = Object.values(ratings).length;
    const averageRating = ratingCount > 0 ? ratingSum / ratingCount : 0;
    setOverallRating(averageRating);
  };

  const handleAddToItinerary = (postId) => {
    console.log(`Post ${postId} added to itinerary!`);
  };

  const handleFilterClick = () => {
    setShowFilter(true);
  };

  const handleFilterClose = () => {
    setShowFilter(false);
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div>
      <Navbar showMainLink={true} showDropdown={true} />
      <Container>
        <h1>Night life</h1>
        <Button onClick={handleFilterClick} variant="primary" className="filter-button">
          Filter
        </Button>
        {posts.map((post) => (
          <Card
            key={post.id}
            className="custom-card mb-3"
            style={{ backgroundColor: 'rgba(241, 53, 109, 0.5)', border: 'none' }}
          >
            <Card.Img variant="top" src={post.imageUrl} />
            <Card.Body>
              <Card.Text>{post.username}</Card.Text>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.description}</Card.Text>
              <div className="overall-rating">
                <div className="rating-label">Overall Rating:</div>
                <div className="rating-stars">
                  {[...Array(5)].map((_, index) => (
                    <BsStarFill
                      key={index}
                      className={index < overallRating ? 'filled' : ''}
                    />
                  ))}
                </div>
              </div>
              <Form.Group>
                <Form.Label>Your Rating:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your rating (1-5)"
                  min={1}
                  max={5}
                  onChange={(e) => handleRatingChange(post.id, Number(e.target.value))}
                  onBlur={calculateOverallRating}
                />
              </Form.Group>
              <Button onClick={() => handleAddToItinerary(post.id)} variant="primary">
                Add to Itinerary
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>

      <Modal show={showFilter} onHide={handleFilterClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Type of Food:</Form.Label>
                <Form.Check type="checkbox" label="Italian" />
                <Form.Check type="checkbox" label="Japanese" />
                <Form.Check type="checkbox" label="Mexican" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price Range:</Form.Label>
                <Form.Range
                  min={0}
                  max={3}
                  step={1}
                  value={priceRange}
                  onChange={(e) => handlePriceRangeChange(e.target.value)}
                />
                <Form.Label>
                  {['Free', '$', '$$', '$$$'][priceRange]}
                </Form.Label>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Dietary Restrictions:</Form.Label>
                <Form.Check type="checkbox" label="Vegetarian" />
                <Form.Check type="checkbox" label="Vegan" />
                <Form.Check type="checkbox" label="Gluten-Free" />
                <Form.Check type="checkbox" label="Halal" />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFilterClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFilterClose}>
            Apply Filters
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Nightlife;