import { environment } from '@app/core/environment';
import { useAppDispatch } from '@app/core/hook/hook';
import { signInWithGoogle } from '@app/service/auth/auth.service';
import { UserAction } from '@app/store/user.slice';
import { FC } from 'react';
import { GoogleLogin } from 'react-google-login';
import GoogleLogo from '@app/assets/googlelogo.svg';

const clientId = environment.google_oauth_client_id;

const GoogleLoginBtn: FC = () => {
  const dispatch = useAppDispatch();

  const success = async (res: { [key in string]: any }) => {
    console.debug(`Google Login Response: ${res}`);
    if (res) {
      const { tokenId } = res;
      const jwtToken = await signInWithGoogle(tokenId);
      // set to reducer
      dispatch(UserAction.setJwtToken(jwtToken));
    }
  };

  const error = (errorData: unknown) => {
    console.debug(errorData);
  };

  return clientId ? (
    <GoogleLogin
      // autoLoad
      clientId={clientId}
      render={renderProps => (
        <button onClick={renderProps.onClick} className="googleBtn">
          <img className="googlelogo" src={GoogleLogo} alt="" />
          使用Google帳號登入
        </button>
      )}
      onSuccess={success}
      onFailure={error}
      cookiePolicy="single_host_origin"
    />
  ) : (
    <div />
  );
};

export default GoogleLoginBtn;
