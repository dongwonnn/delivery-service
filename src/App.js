import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import FavoritePage from './pages/FavoritePage';
import MainPage from './pages/MainPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import './App.scss';
import DetailPage from './pages/DetailPage';

const App = () => {
  return (
    <div className="body">
      <Navbar />

      <Switch>
        <Route path="/" exact={true} component={MainPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/orderHistory" component={OrderHistoryPage} />
        <Route path="/favorite" component={FavoritePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/detail/:storeId" exact={true} component={DetailPage} />

        {/* <Route
          path="/detail/:store"
          exact={true}
          render={(props) => <DetailPage id={id} {...props} />}
        /> */}

        <Route render={({ location }) => <div>존재하지 않는 페이지</div>} />
      </Switch>
    </div>
  );
};

export default App;
