import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-item">
        <li>
          <Link to="/">메인</Link>
        </li>
        <li>
          <Link to="/search">검색</Link>
        </li>
        <li>
          <Link to="/orderHistory">주문기록</Link>
        </li>
        <li>
          <Link to="favorite">즐겨찾기</Link>
        </li>
        <li>
          <Link to="profile">프로필</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
