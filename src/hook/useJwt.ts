import { UserAction } from '@app/store/user.slice';
import { StorageType } from '@app/enum/storage-type.enum';
import { useAppDispatch, useAppSelector } from '@app/hook/hook';
import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from '@app/service/util/storage.service';
import { useEffect, useState } from 'react';

const useJwt = () => {
  const dispatch = useAppDispatch();
  const jwtToken = useAppSelector((state) => state.user.jwtToken);
  const preSignComplete = useAppSelector((state) => state.user.preSignComplete);

  // when app started trigger
  useEffect(() => {
    const jwtToken = getStorageItem<string>(StorageType.JWT_TOKEN);
    if (jwtToken) {
      dispatch(UserAction.setJwtToken(jwtToken));
    } else {
      dispatch(UserAction.setPreSignComplete(true));
    }
  }, []);

  useEffect(() => {
    if (preSignComplete) {
      if (jwtToken) {
        setStorageItem(StorageType.JWT_TOKEN, jwtToken);
      } else {
        removeStorageItem(StorageType.JWT_TOKEN);
      }
    }
  }, [jwtToken, preSignComplete]);
};

export default useJwt;
