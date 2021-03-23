import React from 'react';
import { useSelector } from 'react-redux';
import './Bill.scss';
import { CgCloseR } from 'react-icons/cg';

const Bill = () => {
  const cartData = useSelector((state) => state.cart.bills);

  console.log(cartData);

  return (
    <div className="bill">
      <div className="bill-title">
        <p>주문 표</p>
      </div>
      <div className="bill-content">
        {cartData.length > 0 ? (
          cartData.map((data) => (
            <div className="bill-content-data" key={data.id}>
              <p>
                <strong>{data.menuName}</strong> : {data.optionMenus}
              </p>
              <p>
                <CgCloseR /> {data.totalPrice}원
              </p>
            </div>
          ))
        ) : (
          <div>
            <p className="bill-content-not-data">아직 주문 내역이 없습니다.</p>
          </div>
        )}
      </div>
      <div className="bill-sum-price">합계 : 5000</div>
      <button>주문하기</button>
    </div>
  );
};

export default Bill;
