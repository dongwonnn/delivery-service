import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/auth';
import './Header.scss';
import { BsSearch } from 'react-icons/bs';
import { useCookies } from 'react-cookie';

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [cookies, , removeCookie] = useCookies(['access_token']);

  const loadingCheck = useSelector((state) => state.loading.CHECK);

  const onLogoutBtn = () => {
    try {
      const ACCESS_TOKEN = cookies.access_token;

      dispatch(logout(ACCESS_TOKEN));
      removeCookie('access_token');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="header">
      <div className="header_logo"></div>
      {!loadingCheck &&
        (user ? (
          <button onClick={() => onLogoutBtn()}>로그아웃</button>
        ) : (
          <button>
            <Link to="login">로그인</Link>
          </button>
        ))}
    </div>
  );
};

export default Header;
