import React from 'react';
import './DetailMenus.scss';

const DetailMenus = ({ details }) => {
  console.log(details.data);
  return (
    <div>
      {details.menu_category.map((category) => (
        <div className="detailMenus" key={category.name}>
          <p className="detailMenus-category">{category.name}</p>
          {category.menus.map((menu) => (
            <div className="detail-menu" key={menu.id}>
              <div className="detail-menu-info">
                <p className="menu-title">{menu.title}</p>
                <p className="menu-price">{menu.price}</p>
                <p className="menu-desc">{menu.description}</p>
              </div>
              <img src={menu.image} alt="메뉴 사진"></img>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DetailMenus;
