import React from 'react';
import AllCategories from '../components/AllCategories';
import AllStores from '../components/AllStores';
import DataContainer from '../containers/DataContainer';

const MainPage = () => {
  return (
    <div>
      <AllCategories />
      <AllStores />
      <DataContainer />
    </div>
  );
};

export default MainPage;
