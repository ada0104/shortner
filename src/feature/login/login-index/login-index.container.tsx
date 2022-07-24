import GoogleLoginBtn from '@app/component/auth/google-login.component';
import FacebookLoginBtn from '@app/component/auth/facebook-login-component';
import { Link } from 'react-router-dom';
import './login-index.container.css';

// image
import LoginLogo from '@app/assets/loginlogo.svg';
import AppleLogo from '@app/assets/applelogo.svg';

const LoginIndex = () => {
  return (
    <>
      <div className="loginblock">
        <img className="logo" src={LoginLogo} alt="" />
        <p className="welcome">歡迎使用SHORTNER</p>
        <GoogleLoginBtn />
        <FacebookLoginBtn />
        <button type="button" className="appleBtn">
          <img className="btnLogo" src={AppleLogo} alt="" />
          使用Apple帳號登入
        </button>
        <div className="loginhr"></div>
        <div className="form">
          <label htmlFor="email">
            電子信箱
            <br />
            <input type="email" id="email" />
          </label>
          <br />
          <label htmlFor="password">
            密碼
            <br />
            <input type="password" id="password" />
          </label>
          <button type="submit" className="login">
            登入
          </button>
          <div className="link">
            <div className="field">
              <Link to="/account/index">註冊新帳號</Link>
            </div>
            <div className="field">
              <Link to="/resetpassword/index">忘記密碼？</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginIndex;
