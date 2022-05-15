import { UtilAction } from '@app/store/util.slice';
import { UserAction } from '@app/store/user.slice';
import { StorageType } from '@app/enum/storage-type.enum';
import { useAppDispatch, useAppSelector } from '@app/core/hook/hook';
import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from '@app/service/util/storage.service';
import { useEffect } from 'react';

const useJwt = () => {
  const dispatch = useAppDispatch();
  const jwtToken = useAppSelector((state) => state.user.jwtToken);
  const startUp = useAppSelector((state) => state.util.startUp);

  // when app started trigger
  useEffect(() => {
    const jwtToken = getStorageItem<string>(StorageType.JWT_TOKEN);
    if (jwtToken) {
      // set to user reducer
      dispatch(UserAction.setJwtToken(jwtToken));
    } else {
      dispatch(UtilAction.setValidUserComplete(true));
    }
    // set to util reducer
    dispatch(UtilAction.setJwtSetting(true));
  }, []);

  useEffect(() => {
    if (startUp.jwtSetting) {
      if (jwtToken) {
        setStorageItem(StorageType.JWT_TOKEN, jwtToken);
      } else {
        removeStorageItem(StorageType.JWT_TOKEN);
        dispatch(UserAction.setUserInfo(null));
      }
    }
  }, [jwtToken, startUp]);
};

export default useJwt;
