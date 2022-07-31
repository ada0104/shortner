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
import LandingIndex from './landing-index/landing-index.container';

const featureConfig = getFeatureConfig(Feature.Landing);

const routes: IFeatureRouteConfig[] = [
  {
    path: featureConfig.featureRoute.index,
    element: LandingIndex,
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
