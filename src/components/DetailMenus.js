import React, { forwardRef } from 'react';
import './DetailMenus.scss';
import Menu from './Menu';

const DetailMenus = ({ category }, ref) => {
  return (
    <div>
      <div className="detailMenus">
        <p className="detailMenus-category" ref={ref}>
          {category.name}
        </p>
        {category.menus.map((menu) => (
          <Menu menu={menu} key={menu.id} />
        ))}
      </div>
    </div>
  );
};
export default forwardRef(DetailMenus);
