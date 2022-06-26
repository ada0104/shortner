import BasePage from '@app/component/util/base-page.component';
import FeatureContext from '@app/core/context/feature.context';
import GoogleLoginBtn from '@app/component/auth/google-login.component';
import FacebookLoginBtn from '../../../component/auth/facebook-login-component';
import { Feature } from '@app/enum/feature.enum';

import { useContext } from 'react';
import { Button } from '@mui/material';
import './login-index.container.css';

// image
import LoginLogoImage from '@app/assets/loginlogo.svg';

const LoginIndex = () => {
  const featureContext = useContext(FeatureContext);

  const { nextFeature, nextFeatureWithPage } = useContext(FeatureContext);

  const next = (featureId: Feature) => {
    nextFeature(featureId);
  };

  return (
    <>
    {/* <BasePage>
    </BasePage> */}

    <div className="loginblock">
      <img className="logo" src={LoginLogoImage} alt="" />
      <p className="welcome">歡迎使用SHORTNER</p>
      <GoogleLoginBtn />
      <div className="facebook">
        <FacebookLoginBtn />
      </div>
      <div className="apple">

      </div>
      <div></div>
      <div></div>
      <Button variant="contained" className="" onClick={() => next(Feature.Home)}>
        首頁
      </Button>
      <hr />
    </div>
    </>
  );
};

export default LoginIndex;
