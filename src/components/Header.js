import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/auth';
import './Header.scss';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const loadingCheck = useSelector((state) => state.loading.CHECK);

  const onLogoutBtn = () => {
    dispatch(logout(localStorage.getItem('access_token')));
  };

  return (
    <div className="header">
      <div className="header_logo"></div>
      <div className="header_seaerch">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          name="inputValue"
        />
        <BsSearch />
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
