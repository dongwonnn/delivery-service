import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FavoritePage from './pages/FavoritePage';
import MainPage from './pages/MainPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import './App.scss';

const App = () => {
  return (
    <div className="body">
      <Navbar />

      <Route path="/" exact={true} component={MainPage} />
      <Route path="/search" exact={true} component={SearchPage} />
      <Route path="/orderHistory" exact={true} component={OrderHistoryPage} />
      <Route path="/favorite" exact={true} component={FavoritePage} />
      <Route path="/profile" exact={true} component={ProfilePage} />
    </div>
  );
};

export default App;
