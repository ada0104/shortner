import { getFeatureDefaultPath } from '@app/enum/feature-map.enum';
import { useNavigate } from 'react-router-dom';
import { UserAction } from '@app/store/user.slice';
import { StorageType } from '@app/enum/storage-type.enum';
import { useAppSelector, useAppDispatch } from '@app/hook/hook';
import { getStorageItem } from '@app/service/util/storage.service';
import { useEffect, useState } from 'react';
import { authentication } from '@app/service/auth/auth.service';
import { Feature } from '@app/enum/feature.enum';

const useJwt = () => {
  const jwtToken = useAppSelector((state) => state.user.jwtToken);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isFirstTimeAuthLoading, setFirstTimeAuthLoading] = useState<boolean>(
    // first time entry app, use storage token to check valid user or not
    getStorageItem<string>(StorageType.JWT_TOKEN) !== null,
  );

  useEffect(() => {
    // only trigger once to set storage token to reducer
    const jwtToken = getStorageItem<string>(StorageType.JWT_TOKEN);
    if (jwtToken) {
      dispatch(UserAction.setJwtToken(jwtToken));
    }
  }, []);

  useEffect(() => {
    if (jwtToken) {
      const _authentication = async (token: string) => {
        const userInfo = await authentication(token);
        dispatch(UserAction.setUserInfo(userInfo));
        // TODO: adjust to start up url
        navigate(getFeatureDefaultPath(Feature.Home)!);
        setFirstTimeAuthLoading(false);
      };
      _authentication(jwtToken);
    } else if (!isFirstTimeAuthLoading) {
      setFirstTimeAuthLoading(false);
    }
  }, [jwtToken]);

  return isFirstTimeAuthLoading;
};

export default useJwt;
