import { getFeatureDefaultPath } from '@app/enum/feature-map.enum';
import { Feature } from '@app/enum/feature.enum';
import { useAppSelector } from '@app/core/hook/hook';
import { FC, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard: FC = (props) => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const [isLogin] = useState(userInfo !== null);

  const landingPath = useMemo(() => getFeatureDefaultPath(Feature.Landing), []);

  return isLogin ? <>{props.children}</> : <Navigate to={landingPath!} />;
};

export default AuthGuard;
