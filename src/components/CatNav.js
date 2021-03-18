import React from 'react';
import './CatNav.scss';

const CatNav = ({ details }) => {
  return (
    <div className="catNav">
      <ul className="catNav-category">
        {details.menu_category.map((category) => (
          <li key={category.name}>
            <button>{category.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatNav;
