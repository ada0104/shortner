import { environment } from '@app/core/environment';
import { FC } from 'react';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookLogo from '@app/assets/facebooklogo.svg';

const appId = environment.facebook_oauth_app_id;

const FacebookLoginBtn: FC = () => {
  const responseFacebook = (res: { [key in string]: any }) => {
    console.debug(res);
    if (res) {
      const { name } = res;
      // eslint-disable-next-line no-alert
      alert(`Hi ${name}!`);
    }
  };

  return appId ? (
    <FacebookLogin
      appId={appId}
      // autoLoad
      fields="name,email,picture"
      callback={responseFacebook}
      render={(renderProps) => (
        <button
          type="button"
          className="facebookBtn"
          onClick={renderProps.onClick}
        >
          <img className="btnLogo" src={FacebookLogo} alt="" />
          使用Facebook帳號登入
        </button>
      )}
    />
  ) : (
    <div />
  );
};

export default FacebookLoginBtn;
