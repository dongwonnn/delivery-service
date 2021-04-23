import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/auth';
import './Header.scss';
import { useCookies } from 'react-cookie';
import { FiMapPin } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

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
      <div className="header_logo">LOGO</div>
      <div className="header-address">
        <FiMapPin className="header-address-pin" />
        <p>잠실 8동 </p>
        <IoIosArrowDown className="header-address-arrow" />
      </div>
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
