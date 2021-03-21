import React from 'react';
import './Bill.scss';

const Bill = () => {
  return (
    <div className="bill">
      <div className="bill-title">
        <p>주문 표</p>
      </div>
      <div className="bill-content">
        <p>아직 주문 내역이 없습니다.</p>
      </div>
      <button>주문하기</button>
    </div>
  );
};

export default Bill;
