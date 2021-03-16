import React from 'react';
import { Link } from 'react-router-dom';
import './AllStores.scss';

const AllStores = ({ stores, loadingStores }) => {
  return (
    <div className="AllStores">
      {loadingStores && '로딩 중'}
      {!loadingStores && stores && console.log(stores)}
    </div>
  );
};

export default AllStores;
