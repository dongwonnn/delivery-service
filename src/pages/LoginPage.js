import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeField, initializeForm, login } from '../reducers/auth';
import './LoginPage.scss';

const LoginPage = () => {
  const authDispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    authDispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    authDispatch(login({ username, password }));
  };

  useEffect(() => {
    authDispatch(initializeForm('login'));
  }, [authDispatch]);

  return (
    <div className="loginPage">
      <header className="login-title">
        <h1 className="login-logo">
          <img src="/images/coupang-logo.jpg" alt="coupang logo" />
        </h1>
      </header>
      <main className="login-main">
        <form onSubmit={onSubmit}>
          <div className="login-content">
            <input
              name="username"
              type="text"
              placeholder="아이디(이메일)"
              onChange={onChange}
              // Reducer로 데이터가 변경됐을 때 input 작동
              // undefined 에러 처리 || ''
              value={form.username || ''}
            />
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={onChange}
              value={form.password || ''}
            />
          </div>
          <div className="login-message">
            <div className="login-checkbox">
              <input type="checkbox" id="auto-login" />
              <label htmlFor="auto-login">자동로그인</label>
            </div>
            <p className="login-search">아이디(이메일)/비밀번호 찾기</p>
          </div>
          <div className="login-submit">
            <button className="login-login">로그인</button>
          </div>
        </form>
      </main>
      <footer className="login-register">
        <Link to="/register">
          <p>회원가입</p>
        </Link>
      </footer>
    </div>
  );
};

export default LoginPage;
