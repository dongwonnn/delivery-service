import React from 'react';
import './Menu.scss';

const Menu = ({ menu }) => {
  return (
    <div className="menu">
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
