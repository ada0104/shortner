/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { FC, ReactElement } from 'react';
import {
  FeaturePageType,
  FeatureRouteType,
} from '@app/enum/feature-page-type.enum';
import { FeaturePath } from '@app/enum/feature-path.enum';
import { Route, Routes } from 'react-router-dom';
import navigationFeature from './feature-navigation.component';

export interface IFeatureRouteConfig {
  path: FeaturePageType | FeatureRouteType | FeaturePath | undefined;
  element: ({
    nextElementPage,
  }: {
    nextElementPage?: () => void;
  }) => ReactElement;
}

interface IProps {
  routes: IFeatureRouteConfig[];
  endFix?: string;
}

const defaultProps = {
  routes: [],
  endFix: '',
};

const FeatureRoute: FC<IProps> = (props) => {
  const { routes, endFix } = props;

  return (
    <Routes>
      {routes
        .filter((x) => x.path !== undefined)
        .map((route, index) => {
          let path = route.path as string;
          if (
            !Object.values(FeatureRouteType).includes(
              route.path as FeatureRouteType,
            )
          ) {
            if (endFix) {
              path = `/${route.path}${endFix}`;
            } else {
              path = `/${route.path}`;
            }
          }

          const ElementComponent = navigationFeature(
            () => <route.element />,
            routes[index].path,
          );

          return (
            <Route
              path={path}
              element={<ElementComponent />}
              key={route.path}
            />
          );
        })}
    </Routes>
  );
};

FeatureRoute.defaultProps = defaultProps;

export default FeatureRoute;
