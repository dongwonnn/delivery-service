import React from 'react';

const AllCategories = ({ cat, getCat }) => {
  getCat();
  console.log(cat);
  return (
    <div>
      <h1>카테고리</h1>
    </div>
  );
};

export default AllCategories;
