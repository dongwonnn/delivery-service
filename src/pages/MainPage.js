import React from 'react';
import Banner from '../components/Banner';
import AllCatContainer from '../containers/AllCatContainer';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="mainpage">
      <Banner />
      <AllCatContainer />
    </div>
  );
};

export default MainPage;
