import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './StoreInfo.scss';
import { Link } from 'react-router-dom';

const StoreInfo = ({ details }) => {
  return (
    <div className="store-info">
      <p className="store-into-name">{details.title}</p>
      <div className="store-info-detail">
        <AiFillStar />
        <p className="store-grade">{details.grade} </p>
        <p className="store-review">
          <Link to="#">
            리뷰 <strong>{details.review_count}</strong>개 &gt;
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StoreInfo;
