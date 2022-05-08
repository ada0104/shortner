import { environment } from '@app/core/environment';
import { StorageType } from '@app/enum/storage-type.enum';
import { useAppDispatch } from '@app/hook/hook';
import { signInWithGoogle } from '@app/service/auth/auth.service';
import { setStorageItem } from '@app/service/util/storage.service';
import { UserAction } from '@app/store/user.slice';
import { FC } from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = environment.google_oauth_client_id;

const GoogleLoginBtn: FC = () => {
  const dispatch = useAppDispatch();

  const success = async (res: { [key in string]: any }) => {
    console.debug(`Google Login Response: ${res}`);
    if (res) {
      const { tokenId } = res;
      const jwtToken = await signInWithGoogle(tokenId);
      // set to storage
      setStorageItem(StorageType.JWT_TOKEN, jwtToken);
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
