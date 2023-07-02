import React from 'react';
import MapON from './MapON';
import Navbar from './Navbar';

const MainOne = () => {
  return (
    <div>
      <Navbar showMainLink={true} showDropdown={true} />
      <h1 style={{ textAlign: 'center' }}>Where are you visiting?</h1>
      <MapON />
    </div>
  );
};

export default MainOne;

