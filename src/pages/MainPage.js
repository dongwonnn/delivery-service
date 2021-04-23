import React from 'react';
import AllCat from '../components/AllCat';
import AllStores from '../components/AllStores';
import Banner from '../components/Banner';
import Sort from '../components/Sort';
import { stores } from '../data/stores';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="mainpage">
      <Banner />
      <AllCat />
      <div className="mainpage-title">
        <div className="title">
          <h2>전체보기</h2>
          <hr />
        </div>
        <Sort />
      </div>
      <AllStores stores={stores} />
    </div>
  );
};

export default MainPage;
