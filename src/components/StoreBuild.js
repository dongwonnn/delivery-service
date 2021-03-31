import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const StoreBuild = ({ loading, stores }) => {
  return (
    <div className="allStores">
      {loading && '로딩 중'}
      {!loading &&
        stores &&
        stores.map((store) => (
          <div className="item-card" key={store.id}>
            <Link to={`/detail/${store.id}`}>
              <div className="card-img"></div>
              <div className="card-text">
                <div className="card-name">{store.name}</div>
                <div className="card-detail">
                  <AiFillStar />
                  <p>
                    {store.grade} ({store.feedNum}) · 배달비{' '}
                    {store.deliveryCost}원
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default StoreBuild;
