import React, { forwardRef } from 'react';
import './DetailMenus.scss';
import Menu from './Menu';

const DetailMenus = ({ category, storeId }, ref) => {
  return (
    <div>
      <DetailMenuModal />
      <div className="detailMenus">
        <p className="detailMenus-category" ref={ref}>
          {category.name}
        </p>
        {category.menus.map((menu) => (
          <div className={menu.id} onClick={}>
            <Menu menu={menu} storeId={storeId} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default forwardRef(DetailMenus);
