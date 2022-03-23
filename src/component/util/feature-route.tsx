import {
  FeaturePageType,
  FeatureRouteType,
} from '@app/enum/feature-page-type.enum';
import { FeaturePath } from '@app/enum/feature-path.enum';
import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

interface Props {
  route: Array<{
    path: FeaturePageType | FeatureRouteType | FeaturePath | undefined;
    element: () => ReactElement;
  }>;
  endFix?: string;
}

const defaultProps = {
  endFix: '',
};

const FeatureRoute = (props: Props) => {
  return (
    <Routes>
      {props.route
        .filter((x) => x.path !== undefined)
        .map((route) => {
          let path = route.path as string;
          if (
            !Object.values(FeatureRouteType).includes(
              route.path as FeatureRouteType,
            )
          ) {
            if (props.endFix) {
              path = `/${route.path}${props.endFix}`;
            } else {
              path = `/${route.path}`;
            }
          }

          return (
            <Route path={path} element={<route.element />} key={route.path} />
          );
        })}
    </Routes>
  );
};

FeatureRoute.defaultProps = defaultProps;

export default FeatureRoute;
