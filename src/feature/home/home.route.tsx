import NavRoute from '@app/component/route/nav-route.component';
import FeatureRoute, {
  IFeatureRouteConfig,
} from '@app/component/route/feature-route.component';
import { getFeatureConfig } from '@app/enum/feature-map.enum';
import { FeatureRouteType } from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import HomeIndex from './home-index/home-index.container';

const featureConfig = getFeatureConfig(Feature.Home);

const routes: IFeatureRouteConfig[] = [
  {
    path: featureConfig.featureRoute.index,
    element: HomeIndex,
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
  return <FeatureRoute routes={routes} featureConfig={featureConfig} />;
};

export default Route;
