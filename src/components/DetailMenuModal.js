import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenus } from '../modules/data';
import './MenuDetailPage.scss';

const DetailMenuModal = ({ match }) => {
  const menuId = match.params.menuId;

  const detailMenus = useSelector((state) => state.data.menus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenus(menuId));
  }, [menuId, dispatch]);

  return (
    <div>
      <h1>상세 구성</h1>
      <p>{detailMenus.id}</p>
      <p>{detailMenus.name}</p>
      <p>{detailMenus.price}</p>
      <p>{detailMenus.description}</p>
      <img src={detailMenus.image} alt="상세 메뉴 이미지"></img>
      {detailMenus.option_groups.length !== 0 && (
        <div>
          {detailMenus.option_groups.map((group) => (
            <div key={group.name}>
              <p>{group.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailMenuModal;
