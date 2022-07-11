import { getFeatureDefaultPath } from '@app/enum/feature-map.enum';
import { Feature } from '@app/enum/feature.enum';
import { useAppSelector } from '@app/core/hook/hook';
import { FC, useMemo } from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard: FC = (props) => {
  const userInfo = useAppSelector((state) => state.user.userInfo);

  const landingPath = useMemo(() => getFeatureDefaultPath(Feature.Login), []);

  return userInfo !== null ? (
    <>{props.children}</>
  ) : (
    <Navigate to={landingPath!} />
  );
};

export default AuthGuard;
