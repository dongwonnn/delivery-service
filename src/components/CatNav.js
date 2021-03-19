import React from 'react';
import './CatNav.scss';

const CatNav = ({ details, moveToPage, viewIndex }) => {
  return (
    <div className="catNav">
      <ul className="catNav-category">
        {details.menu_category.map((category, idx) => (
          <li key={category.name} className={viewIndex === idx ? 'on' : ''}>
            <button onClick={moveToPage(idx)}>{category.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatNav;
