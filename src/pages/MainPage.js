import React from 'react';
import Banner from '../components/Banner';
import Sort from '../components/Sort';
import AllCatContainer from '../containers/AllCatContainer';
import AllStoresContainer from '../containers/AllStoresContainer';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="mainpage">
      <Banner />
      <AllCatContainer />
      <div className="mainpage-title">
        <div className="title">
          <h2>전체보기</h2>
          <hr />
        </div>
        <Sort />
      </div>
      <AllStoresContainer />
    </div>
  );
};

export default MainPage;
