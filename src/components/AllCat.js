import React from 'react';
import { Link } from 'react-router-dom';
import './AllCat.scss';

const AllCat = ({ cat, loadingCat }) => {
  return (
    <div className="allCat">
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

export default AllCat;
