import React, { useState } from 'react';
import classNames from '../../node_modules/classnames/index';
import BodyBlackoutStyle from './BodyBlackoutStyle';
import DetailMenuModal from './DetailMenuModal';
import './Menu.scss';

const Menu = ({ menu, menuId }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onSetIsVisible = (active) => {
    setIsVisible(active);
  };

  return (
    <div>
      <div
        className={classNames('menu', { isVisible })}
        onClick={() => onSetIsVisible(true)}
      >
        <div className="menu-info">
          <p className="menu-title">{menu.name}</p>
          <p className="menu-price">{menu.price}원</p>
          <p className="menu-desc">{menu.description}</p>
        </div>
        <div className="menu-img">
          <img src={menu.image} alt="메뉴 사진" />
        </div>
      </div>
      <div>
        {isVisible && (
          <DetailMenuModal menuId={menu.id} setIsVisible={setIsVisible} />
        )}
        {isVisible && <BodyBlackoutStyle onSetIsVisible={onSetIsVisible} />}
      </div>
    </div>
  );
};

export default Menu;
