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
            <div className="category" key={category.name}>
              <Link to={`/category/${category.text}`}>
                <div className="category-box"></div>
                <p>{category.text}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCat;
