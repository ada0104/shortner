/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { FC, ReactElement } from 'react';
import {
  FeaturePageType,
  FeatureRouteType,
} from '@app/enum/feature-page-type.enum';
import { FeaturePath } from '@app/enum/feature-path.enum';
import { Route, Routes } from 'react-router-dom';

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
        .map((route) => {
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

          return (
            <Route path={path} element={<route.element />} key={route.path} />
          );
        })}
    </Routes>
  );
};

FeatureRoute.defaultProps = defaultProps;

export default FeatureRoute;
