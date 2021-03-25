import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './PaymentPage.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ImCreditCard } from 'react-icons/im';
import { BiWon } from 'react-icons/bi';
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

  const onSendCartData = () => {
    // const sendData = {
    //   storeName,
    //   cartData,
    //   deliveryCost,
    // };
    // const response = await axios.post();
  };

  const onResetCart = () => {};

  return (
    <div>
      <div className="payment-page">
        <div className="payment-content">
          <h4 className="payment-content-header">결제하기</h4>
          <div className="payment-content-adrress">
            <h4>배달 정보</h4>
            <div>
              <div>
                <p>주소</p>
                <input placeholder="(필수) 상세주소 입력"></input>
              </div>
              <div>
                <p>휴대전화번호</p>
                <input placeholder="(필수) 휴대전화 번호 입력"></input>
              </div>
            </div>
          </div>
          <div className="payment-content-message">
            <h4>주문시 요청사항</h4>
            <div>
              <textarea placeholder="문 앞에 두고 가주세요."></textarea>
            </div>
          </div>
          <div className="payment-content-way">
            <h4>결제수단 선택</h4>
            <p>웹 결제</p>
            <div className="payment-way-btn">
              <div>
                <ImCreditCard /> 신용카드
              </div>
              <div>
                <BiWon /> 현금
              </div>
            </div>
            <p>현장 결제</p>
            <div className="payment-way-btn">
              <div>
                <ImCreditCard />
                신용카드
              </div>
              <div>
                <BiWon />
                현금
              </div>
            </div>
          </div>
          <div className="payment-content-coupon">
            <h4>할인방법</h4>
            <div>
              <p>쿠폰</p>
              <input placeholder="쿠폰 코드 입력"></input>
              <button>적용</button>
            </div>
          </div>
        </div>
        <div className="payment-info">
          <p className="payment-info-header">주문 내역</p>
          <p className="payment-info-store">{storeName}</p>
          {cartData.map((data) => (
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
          ))}
          <div className="payment-info-delivery_cost">
            <p>배달료</p>
            <p>{deliveryCost}원</p>
          </div>
          <div className="payment-info-total_price">
            <p>총 결제 금액</p>
            <p>{sumPirce + transStrToInt(deliveryCost)}</p>
          </div>
          <button onClick="">
            <Link to="/">결제하기</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
