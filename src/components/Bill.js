import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { removeCart } from '../reducers/cart';
import './Bill.scss';

const transStrToInt = (strPrice) => Number(strPrice.replace(',', ''));

const Bill = () => {
  const deliveryCost = useSelector(
    (state) => state.data.details.delivery_charge,
  );
  const storeId = useSelector((state) => state.data.details.id);
  const cartData = useSelector((state) => state.cart.bills);
  const cartDispatch = useDispatch();
  const [sumPirce, setSumPrice] = useState(0);

  useEffect(() => {
    const payment = cartData.reduce((acc, cur) => {
      return acc + cur.totalPrice;
    }, 0);

    setSumPrice(payment);
  }, [cartData]);

  const onRemoveBtn = (id) => {
    cartDispatch(removeCart(id));
  };

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
                  {data.totalPrice}원{' '}
                  <AiOutlineCloseCircle onClick={() => onRemoveBtn(data.id)} />
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
        <Link to={`/detail/${storeId}/payment`}>
          <button>{sumPirce + transStrToInt(deliveryCost)}원 결제하기</button>
        </Link>
      ) : (
        <button onClick={() => alert('메뉴를 추가해 주세요.')}>
          결제 하기
        </button>
      )}
    </div>
  );
};

export default React.memo(Bill);
