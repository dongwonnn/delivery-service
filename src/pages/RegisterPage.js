import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../reducers/auth';
import './RegisterPage.scss';

const RegisterPage = ({ history }) => {
  const dispatch = useDispatch();
  const { form, regiCheck, regiError } = useSelector(({ auth }) => ({
    form: auth.register,
    regiCheck: auth.regiCheck,
    regiError: auth.regiError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, password, email } = form;
    dispatch(register({ name, email, password }));
  };

  useEffect(() => {
    if (regiError) {
      alert('회원가입 실패');
      return;
    }
    if (regiCheck) {
      history.push('/login');
    }
  }, [regiCheck, regiError, history]);

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <div className="registerPage">
      <header className="register-title">
        <h1 className="register-logo">
          <img src="/images/coupang-logo.jpg" alt="coupang logo" />
        </h1>
      </header>
      <main className="register-main">
        <div className="register-content">
          <p>회원정보를 입력해주세요</p>
          <form onSubmit={onSubmit}>
            <div className="register-content">
              <input
                name="email"
                type="text"
                placeholder="아이디(이메일)"
                onChange={onChange}
                value={form.email || ''}
              />
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={onChange}
                value={form.password || ''}
              />
              <input
                type="password"
                name="passwordConfirm"
                placeholder="비밀번호 확인"
                onChange={onChange}
                value={form.passwordConfirm || ''}
              />
              <input
                type="text"
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={form.name || ''}
              />
              <input
                type="text"
                name="phoneNum"
                placeholder="휴대폰 번호"
                onChange={onChange}
                value={form.phoneNum || ''}
              />
            </div>
            <div>
              <button className="register-submit">동의하고 가입하기</button>
            </div>
          </form>
        </div>
      </main>
      <footer className="register-footer">
        <p className="register-copy">©Coupang Corp. All rights reserved</p>
      </footer>
    </div>
  );
};

export default RegisterPage;

/* <p>쿠팡 서비스약관에 동의해주세요.</p>
<div className="reg-agree-all">
  <input type="checkbox" id="all" />
  <label htmlFor="all">모두 동의합니다.</label>
</div> */
/* <div className="reg-agree-form">
  <ul>
    <li>
      <input type="checkbox" id="age" />
      <label htmlFor="age">[필수] 만 14세 이상입니다</label>
    </li>
    <li>
      <input type="checkbox" id="use" />
      <label htmlFor="use">[필수] 쿠팡 이용약관 동의.</label>
    </li>
    <li>
      <input type="checkbox" id="elect" />
      <label htmlFor="elect">
        [필수] 전자금융거래 이용약관 동의.
      </label>
    </li>
    <li>
      <input type="checkbox" id="collect" />
      <label htmlFor="collect">
        [필수] 개인정보 수집 및 이용 동의.
      </label>
    </li>
    <li>
      <input type="checkbox" id="offer" />
      <label htmlFor="offer">[필수] 개인정보 제공 동의.</label>
    </li>
  </ul>
</div> */
