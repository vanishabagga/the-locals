import React, { useState } from 'react';
import Navbar from './Navbar';
import { Tab, Tabs } from 'react-bootstrap';
import dp from './dp.jpg';
import './Account.css'; 


const Account = () => {
  const userData = {
    name: 'Olivia Rodrigo',
    city: 'Toronto',
    description: 'Love Toronto, excited to explore other cities in Ontario!',
    profilePicture: dp,
  };

  const [city, setCity] = useState(userData.city);
  const [description, setDescription] = useState(userData.description);
  const [editMode, setEditMode] = useState(false);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  };


  return (
    <div>
      <Navbar showMainLink={true} showDropdown={true} />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="my-5 text-left">Account</h1>
            <Tabs defaultActiveKey="account" id="account-tabs">
              <Tab eventKey="account" title="Account">
                <div className="card custom-card mt-4">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <img
                        src={userData.profilePicture}
                        alt="Profile"
                        className="mr-3"
                        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                      />
                      <div>
                        <h4 className="mb-3">{userData.name}</h4>
                        <div className="form-group">
                          <label htmlFor="city" style={{ textAlign: 'left' }}>City:</label>
                          {editMode ? (
                            <input
                              type="text"
                              className="form-control"
                              id="city"
                              value={city}
                              onChange={handleCityChange}
                            />
                          ) : (
                            <input
                              type="text"
                              className="form-control-plaintext"
                              id="city"
                              value={city}
                              readOnly
                            />
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="description" style={{ textAlign: 'left' }}>Description:</label>
                          {editMode ? (
                            <textarea
                              className="form-control"
                              id="description"
                              value={description}
                              onChange={handleDescriptionChange}
                            />
                          ) : (
                            <p>{description}</p>
                          )}
                        </div>
                        <button
                          className="btn btn-primary" style={{ backgroundColor: '#1b9db7', border: 'none' }}
                          onClick={handleEditModeToggle}
                        >
                          {editMode ? 'Save' : 'Change Description and/or City'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="itinerary" title="Itinerary">
                <Itinerary />
              </Tab>
              <Tab eventKey="reviews" title="Reviews">
                <Reviews />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

const Itinerary = () => {
  const [places, setPlaces] = useState([
    { id: 1, name: 'Place A', checked: false },
    { id: 2, name: 'Place B', checked: false },
    { id: 3, name: 'Place C', checked: false },
    { id: 4, name: 'Place D', checked: false },
  ]);

  const handleCheckboxChange = (placeId) => {
    setPlaces((prevPlaces) =>
      prevPlaces.map((place) =>
        place.id === placeId ? { ...place, checked: !place.checked } : place
      )
    );
  };

  return (
    <div className="container">
      <h1>Places to Visit</h1>
      <ul className="list-group">
        {places.map((place) => (
          <li className="list-group-item" key={place.id}>
            <label>
              <input
                type="checkbox"
                checked={place.checked}
                onChange={() => handleCheckboxChange(place.id)}
              />
              {place.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      place: 'Food',
      description: 'Review',
      rating: 4,
    },
    {
      id: 2,
      place: 'Attraction',
      description: 'Review',
      rating: 5,
    },
  ];

  return (
    <div className="container">
      <h1>Reviews</h1>
      {reviews.map((review) => (
        <div className="card mb-3" key={review.id}>
          <div className="card-body">
            <h5 className="card-title">{review.place}</h5>
            <p className="card-text">{review.description}</p>
            <p className="card-text">Rating: {review.rating}/5</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Account;




















