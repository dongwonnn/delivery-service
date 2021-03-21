import React from 'react';
import './CatNav.scss';

const CatNav = ({ details, moveToPage }) => {
  return (
    <div className="catNav">
      <ul className="catNav-category">
        {details.menu_groups.map((category, idx) => (
          <li key={category.name}>
            <button onClick={moveToPage(idx)}>{category.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatNav;
