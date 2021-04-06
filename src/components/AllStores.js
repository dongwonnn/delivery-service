import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStores } from '../reducers/data';
import TestPage from '../pages/TestPage';
const AllStores = () => {
  const { loadingStores } = useSelector(({ data }) => ({
    loadingStores: data.GET_STORES,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStores());
  }, [dispatch]);

  return (
    <div>
      {loadingStores && '로딩 중'}
      {!loadingStores && <TestPage />}
    </div>
  );
};

export default React.memo(AllStores);
