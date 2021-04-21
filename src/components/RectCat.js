import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import './RectCat.scss';

const RectCat = () => {
  return (
    <div className="rectCat">
      {categories && (
        <div className="rect-categories">
          {categories.map((category) => (
            <div className="rect-category" key={category.name}>
              <Link to={`/category/${category.text}`}>
                <div className="rect-category-img"></div>
                <p>{category.text}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RectCat;
