import React from 'react';

const Container = ({ title, data }) => {
  const dataList = data.map((item) => (
    <div className='list' key={item.id}>
      <h3>{item.name}</h3>
      {!item.image ? (
        <img src={title} alt='item.name' />
      ) : (
        <img src={item.image} alt='item.name' />
      )}
    </div>
  ));

  return <section className='container'>{dataList}</section>;
};

export default Container;
