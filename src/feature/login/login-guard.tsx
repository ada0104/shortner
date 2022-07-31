import { getFeatureDefaultPath } from '@app/enum/feature-map.enum';
import { Feature } from '@app/enum/feature.enum';
import { useAppSelector } from '@app/core/hook/hook';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const LoginGuard: FC = (props) => {
  const jwtToken = useAppSelector((state) => state.user.jwtToken);
  const userInfo = useAppSelector((state) => state.user.userInfo);

  return jwtToken && userInfo ? (
    <Navigate to={getFeatureDefaultPath(Feature.Home)} replace />
  ) : (
    <>{props.children}</>
  );
};

export default LoginGuard;
