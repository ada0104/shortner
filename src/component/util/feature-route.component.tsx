import { FC } from 'react';
import {
  FeaturePageType,
  FeatureRouteType,
} from '@app/enum/feature-page-type.enum';
import { FeaturePath } from '@app/enum/feature-path.enum';
import { Route, Routes } from 'react-router-dom';

export interface IFeatureRouteConfig {
  path: FeaturePageType | FeatureRouteType | FeaturePath | undefined;
  params?: String[];
  element: FC;
  guard?: FC[];
}

interface IProps {
  routes: IFeatureRouteConfig[];
  endFix?: string;
}

const defaultProps: IProps = {
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
          let path = `/${route.path}`;
          if (
            !Object.values(FeatureRouteType).includes(
              route.path as FeatureRouteType,
            )
          ) {
            if (route.params) {
              path += `/${route.params.join('/')}`;
            }
            if (endFix) {
              path += endFix;
            }
          }

          let Element: FC = () => <route.element />;
          if (route.guard) {
            for (let i = route.guard.length; i >= 0; i--) {
              const Guard = route.guard[i];
              Element = () => (
                <Guard>
                  <route.element />
                </Guard>
              );
            }
          }

          return <Route path={path} element={<Element />} key={route.path} />;
        })}
    </Routes>
  );
};

FeatureRoute.defaultProps = defaultProps;

export default FeatureRoute;
