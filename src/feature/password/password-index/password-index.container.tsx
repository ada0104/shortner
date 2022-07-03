import BasePage from '@app/component/util/base-page.component';
import FeatureContext from '@app/core/context/feature.context';
import { Feature } from '@app/enum/feature.enum';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import './password-index.container.css';

// image
import LoginLogo from '@app/assets/loginlogo.svg';

const PasswordIndex = () => {
  const featureContext = useContext(FeatureContext);

  const { nextFeature, nextFeatureWithPage } = useContext(FeatureContext);

  const next = (featureId: Feature) => {
    nextFeature(featureId);
  };

  return (
    <>
      <div className="accountBlock">
        <img className="logo" src={LoginLogo} alt="" />
        <p className="welcome">修改密碼</p>
        <div className="accountForm">
          <label htmlFor="password">
            新密碼
            <br />
            <input type="password" id="password" />
          </label>
          <label htmlFor="password">
            重複確認新密碼
            <br />
            <input type="password" id="password" />
          </label>
          <Button type="submit" className="submitEmail">
            修改為新密碼
          </Button>
        </div>
      </div>
    </>
  );
};

export default PasswordIndex;
