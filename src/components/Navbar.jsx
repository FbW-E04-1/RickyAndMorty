import React from 'react';

import characters from '../assets/characters.jpg';
import episodes from '../assets/episodes.jpg';
import locations from '../assets/locations.jpeg';

const Navbar = ({ handleSearch }) => {
  return (
    <nav>
      <aside>
        <label>Characters</label>
        <img
          onClick={() => handleSearch('character')}
          src={characters}
          alt='characters'
        />
      </aside>

      <aside>
        {' '}
        <label>Episodes</label>
        <img
          onClick={() => handleSearch('episode')}
          src={episodes}
          alt='episodes'
        />
      </aside>

      <aside>
        {' '}
        <label>Locations</label>
        <img
          onClick={() => handleSearch('location')}
          src={locations}
          alt='locations'
        />
      </aside>
    </nav>
  );
};

export default Navbar;
