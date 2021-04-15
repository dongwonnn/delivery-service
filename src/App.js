import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import FavoritePage from './pages/FavoritePage';
import MainPage from './pages/MainPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import PaymentPage from './pages/PaymentPage';
import Header from './components/Header';
import './App.scss';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { check } from './reducers/auth';
import { useDispatch, useSelector } from 'react-redux';
import AuthRoute from './components/AuthRoute';

const App = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    function loadUser() {
      try {
        const user = localStorage.getItem('user');

        if (!user) return;

        dispatch(check());
      } catch (e) {
        console.log('localStorage is not working');
      }
    }

    loadUser();
  }, [dispatch]);

  return (
    <div className="body">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <>
          <Header />
          <Navbar />

          <Route path="/" exact={true} component={MainPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/detail/:storeId" exact={true} component={DetailPage} />

          <AuthRoute
            user={user}
            path="/orderHistory"
            render={(props) => <OrderHistoryPage {...props} />}
          />
          <AuthRoute
            user={user}
            path="/favorite"
            render={(props) => <FavoritePage {...props} />}
          />
          <AuthRoute
            user={user}
            path="/profile"
            render={(props) => <ProfilePage {...props} />}
          />

          <AuthRoute
            user={user}
            path="/detail/:storeId/payment"
            render={(props) => <PaymentPage {...props} />}
          />
        </>
        <Route render={({ location }) => <div>존재하지 않는 페이지</div>} />
      </Switch>
    </div>
  );
};

export default App;
