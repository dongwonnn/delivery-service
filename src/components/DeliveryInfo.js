import React from 'react';
import { BsClock } from 'react-icons/bs';
import './DeliveryInfo.scss';

const DeliveryInfo = ({ details }) => {
  return (
    <div className="store-delivery-info">
      <div className="store-delivery-info-header">
        <BsClock />
        <p>{details.delivery_time}</p>
      </div>

      <div className="store-delivery-price-info">
        <p className="store-delivery-text">배달비</p>
        <p>
          <strong>{details.delivery_charge}원</strong>
        </p>
      </div>
      <div className="store-delivery-price-info">
        <p className="store-delivery-text">최소주문</p>
        <p>{details.minimum_order_amount}원</p>
      </div>
    </div>
  );
};

export default DeliveryInfo;
