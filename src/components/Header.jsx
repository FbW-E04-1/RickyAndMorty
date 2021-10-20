import React from 'react';

import Navbar from './Navbar';

const Header = ({ title, handleSearch }) => {
  return (
    <header>
      <img src={title} alt='title' />
      <Navbar handleSearch={handleSearch} />
    </header>
  );
};

export default Header;
