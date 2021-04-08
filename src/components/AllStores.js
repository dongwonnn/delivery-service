import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllStores.scss';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getStores } from '../reducers/data';
const AllStores = () => {
  const stores = useSelector((state) => state.data.stores);
  const loadingStores = useSelector((state) => state.data.GET_STORES);

  const storesDispatch = useDispatch();
  useEffect(() => {
    storesDispatch(getStores());
  }, [storesDispatch]);

  return (
    <div className="allStores">
      {loadingStores && '로딩 중'}
      {!loadingStores &&
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

export default React.memo(AllStores);
