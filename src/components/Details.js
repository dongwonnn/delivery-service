import React from 'react';
import CatNav from '../components/CatNav';
import DetailMenus from '../components/DetailMenus';

const Details = ({ details, loadingDetails }) => {
  return (
    <div className="detail-page">
      {loadingDetails && '로딩 중'}
      {!loadingDetails && details && (
        <div className="detail-left">
          <img src={details.data.poster_image} alt="이미지"></img>
          <CatNav details={details.data} />
          <DetailMenus details={details.data} />
        </div>
      )}
    </div>
  );
};

export default Details;
