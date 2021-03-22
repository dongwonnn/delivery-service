import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenus } from '../modules/data';
import './DetailMenuModal.scss';
import SelectOptions from './SelectOptions';

const transStrToInt = (strPrice) => strPrice.replace(',', '');

const DetailMenuModal = ({ menuId }) => {
  const detailMenus = useSelector((state) => state.data.menus);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(undefined);
  const defaultPrice = detailMenus
    ? transStrToInt(detailMenus.price)
    : undefined;

  const dispatch = useDispatch();

  useEffect(() => {
    setTotalPrice(defaultPrice);
  }, [detailMenus, defaultPrice]);

  useEffect(() => {
    dispatch(getMenus(menuId));
  }, [menuId, dispatch]);

  const onMinusBtn = () => {
    if (count > 1) {
      const nextCount = count - 1;
      const totalPrice = nextCount * defaultPrice;
      setCount(nextCount);
      setTotalPrice(totalPrice);
    } else {
      alert('1개 이상을 선택해주세요.');
    }
  };
  const onPlusBtn = () => {
    const nextCount = count + 1;
    const totalPrice = nextCount * defaultPrice;

    setCount(nextCount);
    setTotalPrice(totalPrice);
  };

  if (detailMenus === null) {
    return <div>로딩 중</div>;
  }

  return (
    <div className="detail-menu-modal">
      <div className="detail-menu-modal-img">
        <img src={detailMenus.image} alt="상세 메뉴 이미지"></img>
      </div>
      <div className="detail-modal-info">
        <h2>{detailMenus.name}</h2>
        <p>{detailMenus.description}</p>
      </div>

      <div className="detail-modal-price">
        <p>가격</p>
        <p>{totalPrice}원</p>
      </div>
      <div className="detail-modal-count">
        <p>수량</p>
        <div className="detail-modal-count-btn">
          <button onClick={() => onMinusBtn()}>-</button>
          <p>{count}</p>
          <button onClick={() => onPlusBtn()}>+</button>
        </div>
      </div>

      {detailMenus.option_groups.length !== 0 && (
        <div>
          {detailMenus.option_groups.map((group) => (
            <SelectOptions
              group={group}
              setTotalPrice={setTotalPrice}
              key={group.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailMenuModal;
