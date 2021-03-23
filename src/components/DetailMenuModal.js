import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenus } from '../modules/data';
import './DetailMenuModal.scss';
import SelectOptions from './SelectOptions';

const transStrToInt = (strPrice) => Number(strPrice.replace(',', ''));

const DetailMenuModal = ({ menuId }) => {
  const detailMenus = useSelector((state) => state.data.menus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenus(menuId));
  }, [menuId, dispatch]);

  const [menuCnt, setMenuCnt] = useState(1);

  const [defaultPrice, setDefaultPrice] = useState(undefined);
  const [totalPrice, setTotalPrice] = useState(undefined);
  useEffect(() => {
    const tempPrice = detailMenus ? transStrToInt(detailMenus.price) : 0;
    setDefaultPrice(tempPrice);
    setTotalPrice(tempPrice);
  }, [detailMenus]);

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
    const nextTotalPrice = defaultPrice * menuCnt;
    setTotalPrice(nextTotalPrice);
  }, [menuCnt, defaultPrice]);

  const onInputBtn = (menuPrice) => {
    const nextDefaultPrice = defaultPrice + menuPrice;
    setDefaultPrice(nextDefaultPrice);
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
          <p>{menuCnt}</p>
          <button onClick={() => onPlusBtn()}>+</button>
        </div>
      </div>
      <div className="detail-modal-select-menus">
        <form>
          {detailMenus.option_groups.map((group) => (
            <div className="menus-group" key={group.name}>
              <div className="menus-group-name">{group.name}</div>
              {group.options.map((option) => (
                <div className="menus-group-menu" key={option.id}>
                  <div>
                    <input
                      type="checkbox"
                      id={option.id}
                      name={group.name}
                      value={option.name}
                      onClick={() => onInputBtn(transStrToInt(option.price))}
                    />
                    <label htmlFor={option.id}>{option.name}</label>
                  </div>
                  <p>+ {option.price}</p>
                </div>
              ))}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default DetailMenuModal;
