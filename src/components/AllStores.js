import React from 'react';
import { Link } from 'react-router-dom';
import './AllStores.scss';
import { AiFillStar } from 'react-icons/ai';

const AllStores = ({ stores, loadingStores }) => {
  console.log(stores);
  return (
    <div className="allStores">
      {loadingStores && '로딩 중'}
      {!loadingStores &&
        stores &&
        stores.map((store) => (
          <Link to={`/detail/${store.name}`} key={store.name}>
            <div className="item-card">
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
            </div>
          </Link>
        ))}
    </div>
  );
};

export default AllStores;
