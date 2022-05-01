import { environment } from '@app/core/environment';
import { FC } from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = environment.google_oauth_client_id;

const GoogleLoginBtn: FC = () => {
  const success = (res: { [key in string]: any }) => {
    console.debug(res);

    if (res) {
      const { name } = res.profileObj;
      // eslint-disable-next-line no-alert
      alert(`Hi ${name}!`);
    }
  };

  const error = (errorData: unknown) => {
    console.debug(errorData);
  };

  return clientId ? (
    <GoogleLogin
      autoLoad
      clientId={clientId}
      buttonText="Login"
      onSuccess={success}
      onFailure={error}
      cookiePolicy="single_host_origin"
    />
  ) : (
    <div />
  );
};

export default GoogleLoginBtn;
