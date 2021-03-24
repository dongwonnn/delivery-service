import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Bill.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const transStrToInt = (strPrice) => Number(strPrice.replace(',', ''));

const Bill = ({ deliveryCost }) => {
  const cartData = useSelector((state) => state.cart.bills);
  const [sumPirce, setSumPrice] = useState(0);

  useEffect(() => {
    const payment = cartData.reduce((acc, cur) => {
      return acc + cur.totalPrice;
    }, 0);

    setSumPrice(payment);
  }, [cartData]);

  return (
    <div className="bill">
      <div className="bill-title">
        <p>주문표</p>
      </div>
      <div className="bill-content">
        {cartData.length > 0 ? (
          cartData.map((data) => (
            <div className="bill-content-data" key={data.id}>
              <div className="bill-content-data-header">
                <p>
                  {`${data.id}  `} <strong>{data.menuName}</strong>
                </p>
                <p>
                  {data.totalPrice}원 <AiOutlineCloseCircle />
                </p>
              </div>
              <p className="bill-content-data-options">{data.optionMenus}</p>
            </div>
          ))
        ) : (
          <div>
            <p className="bill-content-not-data">아직 주문 내역이 없습니다.</p>
          </div>
        )}
      </div>
      <div className="bill-delivery_cost">배달비 : {deliveryCost}</div>
      {cartData.length > 0 ? (
        <button>{sumPirce + transStrToInt(deliveryCost)}원 결제하기</button>
      ) : (
        <button>결제 하기</button>
      )}
    </div>
  );
};

export default Bill;
