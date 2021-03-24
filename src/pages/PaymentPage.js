import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../node_modules/axios/index';
import './PaymentPage.scss';

const transStrToInt = (strPrice) => Number(strPrice.replace(',', ''));

const PaymentPage = () => {
  const storeName = useSelector((state) => state.data.details.title);
  const cartData = useSelector((state) => state.cart.bills);
  const deliveryCost = useSelector(
    (state) => state.data.details.delivery_charge,
  );
  const [sumPirce, setSumPrice] = useState(0);

  useEffect(() => {
    const payment = cartData.reduce((acc, cur) => {
      return acc + cur.totalPrice;
    }, 0);

    setSumPrice(payment);
  }, [cartData]);

  const onSendCartData = async () => {
    const sendData = {
      storeName,
      cartData,
      deliveryCost,
    };

    const response = await axios.post();
  };

  return (
    <div>
      <div className="payment-page">
        <div className="payment-content">
          <div>결제하기</div>
          <div>
            <p>배달 정보</p>
            <div>
              <p>주소</p>
              <p></p>
              <p>휴대전화번호</p>
            </div>
          </div>
          <div>
            <p>주문시 요청사항</p>
            <div>인풋 박스</div>
          </div>
          <div>
            <p>결제수단 선택</p>
            <div>웹 결제</div>
            <div>현장 결제</div>
          </div>
          <div>
            <p>할인방법</p>
            <div>
              <p>쿠폰</p>
            </div>
          </div>
        </div>
        <div className="payment-info">
          <p className="payment-info-header">주문 내역</p>
          <p className="payment-info-store">{storeName}</p>
          <p className="payment-info-options">
            {cartData.map((data) => (
              <p key={data.id}>{`${data.menuName} : ${data.optionMenus}`}</p>
            ))}
          </p>
          <p className="payment-info-delivery_cost">배달료:{deliveryCost}</p>
          <p className="payment-info-total_price">
            총 금액:{sumPirce + transStrToInt(deliveryCost)}
          </p>
          <button onClick={() => onSendCartData()}>결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
