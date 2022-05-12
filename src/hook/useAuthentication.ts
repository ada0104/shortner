import { getFeatureDefaultPath } from '@app/enum/feature-map.enum';
import { Feature } from '@app/enum/feature.enum';
import { authentication } from '@app/service/auth/auth.service';
import { UserAction } from '@app/store/user.slice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hook';

const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const jwtToken = useAppSelector((state) => state.user.jwtToken);
  const preSignComplete = useAppSelector((state) => state.user.preSignComplete);

  useEffect(() => {
    if (jwtToken) {
      const _authentication = async (token: string) => {
        try {
          const userInfo = await authentication(token);
          dispatch(UserAction.setUserInfo(userInfo));
          // TODO: adjust to start up url
          navigate(getFeatureDefaultPath(Feature.Home)!);
        } catch (error) {
          dispatch(UserAction.setJwtToken(null));
          navigate(getFeatureDefaultPath(Feature.Landing)!);
        } finally {
          if (!preSignComplete) {
            dispatch(UserAction.setPreSignComplete(true));
          }
        }
      };
      _authentication(jwtToken);
    }
  }, [jwtToken]);
};

export default useAuthentication;
