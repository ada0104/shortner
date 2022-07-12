import { getFeatureDefaultPath } from './../../enum/feature-map.enum';
import { UtilAction } from '@app/store/util.slice';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@app/core/hook/hook';
import {
  getStorageItem,
  removeStorageItem,
} from '@app/service/util/storage.service';
import { StorageType } from '@app/enum/storage-type.enum';
import { authentication } from '@app/service/auth/auth.service';
import { UserAction } from '@app/store/user.slice';
import { Feature } from '@app/enum/feature.enum';

const usePreset = () => {
  const [isEntryPathComplete, setEntryPathComplete] = useState(false);
  const [isAuthComplete, setAuthComplete] = useState(false);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Set entry path
  useEffect(() => {
    const loginPath = getFeatureDefaultPath(Feature.Login);
    const landingPath = getFeatureDefaultPath(Feature.Landing);
    // prevent loop in login page
    if (
      location.pathname !== loginPath &&
      location.pathname !== landingPath &&
      location.pathname !== '/'
    ) {
      // set entry path for after login redirect
      dispatch(UtilAction.setEntryPath(location.pathname));
    }
    setEntryPathComplete(true);
  }, []);

  // Authentication
  useEffect(() => {
    const preAuth = async () => {
      try {
        const jwtToken = getStorageItem<string>(StorageType.JWT_TOKEN);
        if (jwtToken) {
          const userInfo = await authentication(jwtToken);
          dispatch(UserAction.setUserInfo(userInfo));
          dispatch(UserAction.setJwtToken(jwtToken));

          if (location.pathname === getFeatureDefaultPath(Feature.Login)) {
            navigate(getFeatureDefaultPath(Feature.Home)!);
          }
        }
      } catch (e) {
        removeStorageItem(StorageType.JWT_TOKEN);
      } finally {
        setAuthComplete(true);
      }
    };
    preAuth();
  }, []);

  return isEntryPathComplete && isAuthComplete;
};

export default usePreset;
