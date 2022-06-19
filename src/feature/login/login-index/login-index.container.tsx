import BasePage from '@app/component/util/base-page.component';
import FeatureContext from '@app/core/context/feature.context';
import GoogleLoginBtn from '@app/component/auth/google-login.component';
import FacebookLoginBtn from '../../../component/auth/facebook-login-component';
import { Feature } from '@app/enum/feature.enum';

import { useContext } from 'react';
import { Button } from '@mui/material';

const LoginIndex = () => {
  const featureContext = useContext(FeatureContext);

  const { nextFeature, nextFeatureWithPage } = useContext(FeatureContext);

  const next = (featureId: Feature) => {
    nextFeature(featureId);
  };

  return (
    <BasePage>
      <h2>Login</h2>
      <Button variant="contained" onClick={() => next(Feature.Home)}>
        首頁
      </Button>
      <hr />
      <GoogleLoginBtn />
      <FacebookLoginBtn />
    </BasePage>
  );
};

export default LoginIndex;
