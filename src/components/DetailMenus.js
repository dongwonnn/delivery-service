import React, { forwardRef } from 'react';
import './DetailMenus.scss';

const DetailMenus = ({ category }, ref) => {
  return (
    <div>
      <div className="detailMenus">
        <p className="detailMenus-category" ref={ref}>
          {category.name}
        </p>
        {category.menus.map((menu) => (
          <div className="detail-menu" key={menu.id}>
            <div className="detail-menu-info">
              <p className="menu-title">{menu.title}</p>
              <p className="menu-price">{menu.price}</p>
              <p className="menu-desc">{menu.description}</p>
            </div>
            <img
              className="detail-menu-img"
              src={menu.image}
              alt="메뉴 사진"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};
export default forwardRef(DetailMenus);
