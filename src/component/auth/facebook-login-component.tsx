import { environment } from '@app/core/environment';
import { FC } from 'react';
import FacebookLogin from 'react-facebook-login';

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
    />
  ) : (
    <div />
  );
};

export default FacebookLoginBtn;
