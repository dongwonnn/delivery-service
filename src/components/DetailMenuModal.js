import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenus } from '../modules/data';
import './DetailMenuModal.scss';

const transStrToInt = (strPrice) => Number(strPrice.replace(',', ''));

const DetailMenuModal = ({ menuId }) => {
  const detailMenus = useSelector((state) => state.data.menus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenus(menuId));
  }, [menuId, dispatch]);

  const [menuCnt, setMenuCnt] = useState(1);
  const [sumMenuPrice, setSumMenuPrice] = useState(0);
  const [defaultPrice, setDefaultPrice] = useState(undefined);
  const [totalPrice, setTotalPrice] = useState(undefined);

  const formRef = useRef(null);

  const onMinusBtn = () => {
    if (menuCnt > 1) {
      const nextMenuCnt = menuCnt - 1;
      setMenuCnt(nextMenuCnt);
    } else {
      alert('1개 이상 선택해주세요.');
    }
  };

  const onPlusBtn = () => {
    const nextMenuCnt = menuCnt + 1;
    setMenuCnt(nextMenuCnt);
  };

  useEffect(() => {
    const tempPrice = detailMenus
      ? transStrToInt(detailMenus.price)
      : undefined;
    setDefaultPrice(tempPrice);
    setTotalPrice(tempPrice);
  }, [detailMenus]);

  const onInputBtn = (min, check) => {
    const formData = new FormData(formRef.current);

    let menuPrice = 0;
    let size = 0;

    for (var value of formData.values()) {
      menuPrice += transStrToInt(value);
      size++;
    }

    setSumMenuPrice(menuPrice);
  };

  useEffect(() => {
    const nextTotalPrice = defaultPrice * menuCnt + sumMenuPrice * menuCnt;
    setTotalPrice(nextTotalPrice);
  }, [menuCnt, defaultPrice, sumMenuPrice]);

  const onSubmitBtn = () => {
    const formData = new FormData(formRef.current);
  };

  if (detailMenus === null) {
    return <div>로딩 중</div>;
  }
  detailMenus.option_groups.sort((a, b) => b.required - a.required);

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
          <p>{menuCnt}</p>
          <button onClick={() => onPlusBtn()}>+</button>
        </div>
      </div>
      <div className="detail-modal-select-menus">
        <form ref={formRef}>
          {detailMenus.option_groups.map((group) => (
            <div className="menus-group" key={group.name}>
              <div className="menus-group-name">
                <p>{`${group.name} (${group.min} ~ ${group.max})`}</p>
                <p>{group.required ? '필수 선택' : ' '}</p>
              </div>
              {group.options.map((option) => (
                <div className="menus-group-menu" key={option.id}>
                  <div>
                    <input
                      type="checkbox"
                      id={option.id}
                      name={option.name}
                      value={transStrToInt(option.price)}
                      onClick={() => onInputBtn(group.min, group.required)}
                    />
                    <label htmlFor={option.id}>{option.name}</label>
                  </div>
                  <p>+ {option.price}원</p>
                </div>
              ))}
            </div>
          ))}
        </form>
      </div>
      <div className="detail-model-submit">
        <button onClick={() => onSubmitBtn()}>주문표에 추가</button>
      </div>
    </div>
  );
};

export default DetailMenuModal;
