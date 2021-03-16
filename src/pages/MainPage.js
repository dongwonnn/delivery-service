import React from 'react';
import Banner from '../components/Banner';
import AllCatContainer from '../containers/AllCatContainer';
import AllStoresContainer from '../containers/AllStoresContainer';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="mainpage">
      <Banner />
      <AllCatContainer />
      <AllStoresContainer />
    </div>
  );
};

export default MainPage;
