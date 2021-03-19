import React from 'react';

const Menu = ({ menu }) => {
  return (
    <div className="detail-menu">
      <div className="detail-menu-info">
        <p className="menu-title">{menu.title}</p>
        <p className="menu-price">{menu.price}원</p>
        <p className="menu-desc">{menu.description}</p>
      </div>
      <img className="detail-menu-img" src={menu.image} alt="메뉴 사진" />
    </div>
  );
};

export default Menu;
