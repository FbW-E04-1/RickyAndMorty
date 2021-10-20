import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Container from './components/Container';

import title from './assets/title.png';

import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');

  const URI = 'https://rickandmortyapi.com/api/';

  const handleSearch = (search) => {
    setSearch(`${URI}${search}`);
  };

  useEffect(() => {
    fetch(search)
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <main>
      <Header title={title} handleSearch={handleSearch} />
      {data ? (
        <Container title={title} data={data} />
      ) : (
        <h3>Please select a category</h3>
      )}
    </main>
  );
};

export default App;
