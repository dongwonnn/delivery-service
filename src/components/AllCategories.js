import React from 'react';
import { Link } from 'react-router-dom';
import './AllCategories.scss';

const AllCategories = ({ cat, loadingCat }) => {
  return (
    <div className="AllCategories">
      {loadingCat && '로딩 중'}
      {!loadingCat && cat && (
        <div className="categories">
          {cat.map((category) => (
            <Link to={`/category/${category.text}`} key={category.name}>
              <div className="category">
                <div className="category-box"></div>
                <p>{category.text}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCategories;
