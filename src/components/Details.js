import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatNav from '../components/CatNav';
import DetailMenus from '../components/DetailMenus';
import Bill from './Bill';
import DeliveryInfo from './DeliveryInfo';
import './Details.scss';
import StoreInfo from './StoreInfo';
import { getDetails } from '../modules/data';

const Details = ({ loadingDetails, storeId }) => {
  const contentRef = useRef([]);

  const details = useSelector((state) => state.data.details);
  const detailsDisaptch = useDispatch();

  useEffect(() => {
    detailsDisaptch(getDetails(storeId));
  }, [detailsDisaptch, storeId]);

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
          <Bill />
        </div>
      )}
    </div>
  );
};

export default Details;
