import BasePage from '@app/component/util/base-page.component';
import FeatureContext from '@app/core/context/feature.context';
import GoogleLoginBtn from '@app/component/auth/google-login.component';
import FacebookLoginBtn from '@app/component/auth/facebook-login-component';
import { Feature } from '@app/enum/feature.enum';
import { Button } from '@mui/material';

import { useContext } from 'react';
import './login-index.container.css';

// image
import LoginLogo from '@app/assets/loginlogo.svg';
import AppleLogo from '@app/assets/applelogo.svg';

const LoginIndex = () => {
  const featureContext = useContext(FeatureContext);

  const { nextFeature, nextFeatureWithPage } = useContext(FeatureContext);

  const next = (featureId: Feature) => {
    nextFeature(featureId);
  };

  return (
    <>
      {/* <BasePage></BasePage> */}

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
          <label htmlFor="">電子信箱</label><br/>
          <input type="email" /><br/>
          <label htmlFor="">密碼</label><br/>
          <input type="password" />
          <button type="submit" className="login">登入</button>
          <p className="new"><a href="">忘記密碼？</a></p>
          <p className="new"><a href="">註冊新帳號</a></p>
        </div>
      </div>
      {/* <Button
        variant="contained"
        className=""
        onClick={() => next(Feature.Home)}
      >
        首頁
      </Button> */}
    </>
  );
};

export default LoginIndex;
