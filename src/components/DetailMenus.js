import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './DetailMenus.scss';
import Menu from './Menu';

const DetailMenus = ({ category, storeId }, ref) => {
  return (
    <div>
      <div className="detailMenus">
        <p className="detailMenus-category" ref={ref}>
          {category.name}
        </p>
        {category.menus.map((menu) => (
          <Link to={`/detail/${storeId}/${menu.id}`} key={menu.id}>
            <Menu menu={menu} storeId={storeId} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default forwardRef(DetailMenus);
