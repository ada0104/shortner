import featureLoader from '@app/component/route/feature-loader.hoc';
import FeatureRoute, {
  IFeatureRouteConfig,
} from '@app/component/route/feature-route.component';
import NavRoute from '@app/component/route/nav-route.component';
import { getFeatureConfig } from '@app/enum/feature-map.enum';
import {
  FeaturePageType,
  FeatureRouteType,
} from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import ErrorNotFound from './error-notFound/not-found.container';

const featureConfig = getFeatureConfig(Feature.Error);

const routes: IFeatureRouteConfig[] = [
  {
    path: featureConfig.featureRoute.notFound,
    element: ErrorNotFound,
  },
  {
    path: FeatureRouteType.Match,
    element: () => <NavRoute route={featureConfig.featureDefaultRoute} />,
  },
  {
    path: FeatureRouteType.All,
    element: () => <NavRoute route={featureConfig.featureDefaultRoute} />,
  },
];

const Route = () => {
  return <FeatureRoute routes={routes} />;
};

export default featureLoader({ ...featureConfig, routeSet: routes })(Route);
