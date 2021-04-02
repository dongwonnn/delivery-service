import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeField, initializeForm, login } from '../reducers/auth';
import { check } from '../reducers/user';
import './LoginPage.scss';

const LoginPage = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [history, user]);

  return (
    <div className="loginPage">
      <header className="login-title">
        <h1 className="login-logo">
          {/* <img src="/images/coupang-logo.jpg" alt="coupang logo" /> */}
        </h1>
      </header>
      <main className="login-main">
        <form onSubmit={onSubmit}>
          <div className="login-content">
            <input
              name="email"
              type="text"
              placeholder="아이디(이메일)"
              onChange={onChange}
              // Reducer로 데이터가 변경됐을 때 input 작동
              // undefined 에러 처리 || ''
              value={form.email || ''}
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
