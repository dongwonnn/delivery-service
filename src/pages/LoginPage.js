import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeField, initializeForm, check, login } from '../reducers/auth';
import './LoginPage.scss';
import * as authApi from '../lib/authorization';

const LoginPage = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: auth.user,
  }));
  const [cookies, setCookie] = useCookies(['access_token']);

  const authData = async ({ email, password }) => {
    try {
      const response = await authApi.login({ email, password });

      const responseBody = response.data;
      const accessToken = response.headers.authorization;
      const maxAge = response.data.data.ttl;

      setCookie('access_token', accessToken, [
        {
          maxAge: maxAge * 60,
        },
        { httpOnly: true },
      ]);

      dispatch(login(responseBody));
    } catch (e) {
      console.log(e);
    }
  };

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
    authData({ email, password });
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      alert('로그인 실패');
      return;
    }
    if (auth) {
      const ACCESS_TOKEN = cookies.access_token;
      dispatch(check(ACCESS_TOKEN));
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');

      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

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
