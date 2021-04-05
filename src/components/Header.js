import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/user';
import './Header.scss';

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const onLogoutBtn = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="header_logo">로고 위치</div>
      <div className="header_seaerch">검색 위치</div>
      {user ? (
        <button onClick={() => onLogoutBtn()}>로그아웃</button>
      ) : (
        <button>
          <Link to="login">로그인</Link>
        </button>
      )}
    </div>
  );
};

export default Header;
