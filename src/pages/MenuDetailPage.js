import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMenus } from '../modules/data';

const MenuDetailPage = ({ match }) => {
  const menuId = match.params.menuId;
  console.log(menuId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenus(menuId));
  }, [menuId, dispatch]);
  return (
    <div>
      <h1>상세 구성</h1>
    </div>
  );
};

export default MenuDetailPage;
