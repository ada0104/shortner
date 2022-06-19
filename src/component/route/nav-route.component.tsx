import { getFeatureDefaultPath } from '@app/enum/feature-map.enum';
import { FeaturePageType } from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import { FC, useMemo } from 'react';
import { Navigate } from 'react-router-dom';

interface IProps {
  route?: FeaturePageType | Feature;
}

const defaultProps: IProps = {
  route: undefined,
};

const NavRoute: FC<IProps> = (props) => {
  const { route } = props;

  const notFoundPath = useMemo(() => {
    return getFeatureDefaultPath(Feature.Error);
  }, []);

  const redirectPath = useMemo(() => {
    let path: string | undefined = route;
    if (path && Object.values(Feature).includes(route as Feature)) {
      path = getFeatureDefaultPath(route as Feature);
    }
    return path;
  }, [route]);

  if (redirectPath) {
    return <Navigate to={`${route}`} replace />;
  }

  return <Navigate to={`${notFoundPath}`} replace />;
};

NavRoute.defaultProps = defaultProps;

export default NavRoute;
