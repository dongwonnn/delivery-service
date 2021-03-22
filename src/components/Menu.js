import React, { useState } from 'react';
import BodyBlackoutStyle from './BodyBlackoutStyle';
import DetailMenuModal from './DetailMenuModal';
import './Menu.scss';

const Menu = ({ menu, menuId }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onSetIsVisible = () => {
    const nextIsVisible = !isVisible;
    setIsVisible(nextIsVisible);
  };
  return (
    <div className="menu" onClick={() => onSetIsVisible()}>
      {isVisible && <BodyBlackoutStyle />}
      {isVisible && <DetailMenuModal menuId={menu.id} />}

      <div className="menu-info">
        <p className="menu-title">{menu.name}</p>
        <p className="menu-price">{menu.price}원</p>
        <p className="menu-desc">{menu.description}</p>
      </div>
      <div className="menu-img">
        <img src={menu.image} alt="메뉴 사진" />
      </div>
    </div>
  );
};

export default Menu;
