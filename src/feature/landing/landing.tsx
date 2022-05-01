import GoogleLoginBtn from '@app/component/auth/google-login.component';
import FeatureContext from '@app/context/feature.context';
import { FeaturePageType } from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import { Button } from '@mui/material';
import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLoginBtn from '../../component/auth/facebook-login-component';

const Landing: FC = () => {
  const navigate = useNavigate();

  const { nextFeature, nextFeatureWithPage } = useContext(FeatureContext);

  const next = (featureId: Feature) => {
    nextFeature(featureId);
  };

  const nextWithPage = (featureId: Feature, pageType: FeaturePageType) => {
    nextFeatureWithPage({ featureId, pageType });
  };

  return (
    <>
      <h1>這頁是介紹頁面！</h1>
      <Button variant="contained" onClick={() => next(Feature.Home)}>
        首頁
      </Button>
      <hr />
      <GoogleLoginBtn />
      <FacebookLoginBtn />
    </>
  );
};

export default Landing;
