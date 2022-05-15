import { UtilAction } from '@app/store/util.slice';
import { getFeatureDefaultPath } from '@app/enum/feature-map.enum';
import { Feature } from '@app/enum/feature.enum';
import { authentication } from '@app/service/auth/auth.service';
import { UserAction } from '@app/store/user.slice';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hook';
import produce from 'immer';

const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const jwtToken = useAppSelector((state) => state.user.jwtToken);
  const startUp = useAppSelector((state) => state.util.startUp);
  const homePath = useMemo(() => getFeatureDefaultPath(Feature.Home), []);

  const _authentication = async (token: string) => {
    try {
      const userInfo = await authentication(token);
      dispatch(UserAction.setUserInfo(userInfo));
    } catch (_) {
      //
    }
  };

  // valid startup jwt token
  useEffect(() => {
    if (
      // not valid user
      !startUp.isValidUserComplete &&
      // jwt setting complete
      startUp.jwtSetting &&
      // jwt token exist
      jwtToken &&
      // entry path exist
      startUp.entryPath
    ) {
      _authentication(jwtToken)
        .then((_) => {
          navigate(startUp.entryPath ?? homePath ?? '/');
        })
        .finally(() => {
          dispatch(UtilAction.setValidUserComplete(true));
        });
    }
  }, [jwtToken, startUp]);

  useEffect(() => {
    if (startUp.isValidUserComplete && jwtToken) {
      _authentication(jwtToken).then((_) => {
        navigate(getFeatureDefaultPath(Feature.Home)!);
      });
    }
  }, [jwtToken]);
};

export default useAuthentication;
