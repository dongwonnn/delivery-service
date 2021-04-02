import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">로고 위치</div>
      <div className="header_seaerch">검색 위치</div>
      <button>
        <Link to="login">로그인</Link>
      </button>
      <button>
        <Link to="register">회원가입</Link>
      </button>
    </div>
  );
};

export default Header;