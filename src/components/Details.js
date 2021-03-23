import React, { useRef } from 'react';
import CatNav from '../components/CatNav';
import DetailMenus from '../components/DetailMenus';
import Bill from './Bill';
import DeliveryInfo from './DeliveryInfo';
import './Details.scss';
import StoreInfo from './StoreInfo';

const Details = ({ details, loadingDetails, storeId }) => {
  const contentRef = useRef([]);

  const moveToPage = (index) => () => {
    contentRef.current[index].scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  return (
    <div className="detail-page">
      {loadingDetails && '로딩 중'}
      {!loadingDetails && details && (
        <div className="detail-left">
          <img src={details.poster_image} alt="대표 이미지"></img>
          <StoreInfo details={details} />
          <DeliveryInfo details={details} />
          <CatNav details={details} moveToPage={moveToPage} />
          {details.menu_groups.map((category, idx) => (
            <DetailMenus
              category={category}
              storeId={storeId}
              key={category.name}
              ref={(r) => (contentRef.current[idx] = r)}
            />
          ))}
        </div>
      )}
      {!loadingDetails && details && (
        <div className="detail-right">
          <Bill deliveryCost={details.delivery_charge} />
        </div>
      )}
    </div>
  );
};

export default Details;
