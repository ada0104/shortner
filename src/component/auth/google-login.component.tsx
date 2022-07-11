import { environment } from '@app/core/environment';
import { useAppDispatch, useAppSelector } from '@app/core/hook/hook';
import {
  authentication,
  signInWithGoogle,
} from '@app/service/auth/auth.service';
import { UserAction } from '@app/store/user.slice';
import { FC } from 'react';
import { GoogleLogin } from 'react-google-login';
import GoogleLogo from '@app/assets/googlelogo.svg';
import { setStorageItem } from '@app/service/util/storage.service';
import { StorageType } from '@app/enum/storage-type.enum';
import { useNavigate } from 'react-router-dom';
import { UtilAction } from '@app/store/util.slice';
import { getFeatureDefaultPath } from '@app/enum/feature-map.enum';
import { Feature } from '@app/enum/feature.enum';

const clientId = environment.google_oauth_client_id;

const GoogleLoginBtn: FC = () => {
  const dispatch = useAppDispatch();
  const entryPath = useAppSelector((state) => state.util.entryPath);
  const navigate = useNavigate();

  const success = async (res: { [key in string]: any }) => {
    console.debug(`Google Login Response: ${res}`);
    if (res) {
      const { tokenId } = res;
      const jwtToken = await signInWithGoogle(tokenId);
      const userInfo = await authentication(jwtToken);

      // set to reducer
      dispatch(UserAction.setJwtToken(jwtToken));
      dispatch(UserAction.setUserInfo(userInfo));
      setStorageItem(StorageType.JWT_TOKEN, jwtToken);

      if (entryPath) {
        navigate(entryPath);
        dispatch(UtilAction.setEntryPath());
      } else {
        const homePath = getFeatureDefaultPath(Feature.Home);
        navigate(homePath!);
      }
    }
  };

  const error = (errorData: unknown) => {
    console.debug(errorData);
  };

  return clientId ? (
    <GoogleLogin
      // autoLoad
      clientId={clientId}
      render={(renderProps) => (
        <button
          type="button"
          onClick={renderProps.onClick}
          className="googleBtn"
        >
          <img className="btnLogo" src={GoogleLogo} alt="" />
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
