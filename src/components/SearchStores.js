import React from 'react';

const SearchStores = ({ stores }) => {
  return (
    <div>
      {stores.map((store) => (
        <p>{store.name}</p>
      ))}
    </div>
  );
};

export default SearchStores;
