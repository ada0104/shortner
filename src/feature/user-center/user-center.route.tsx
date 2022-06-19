import NavRoute from '@app/component/route/nav-route.component';
import featureLoader, {
  IFeatureConfig,
} from '@app/component/route/feature-loader.hoc';
import FeatureRoute, {
  IFeatureRouteConfig,
} from '@app/component/route/feature-route.component';
import { getFeatureConfig } from '@app/enum/feature-map.enum';
import { FeatureRouteType } from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import UserCenterIndex from './user-center-index/user-center-index.container';

const featureItem = getFeatureConfig(Feature.UserCenter);

const routes: IFeatureRouteConfig[] = [
  {
    path: featureItem?.featureRoute?.index,
    element: UserCenterIndex,
  },
  {
    path: FeatureRouteType.Match,
    element: () => <NavRoute route={featureItem?.featureDefaultRoute} />,
  },
  {
    path: FeatureRouteType.All,
    element: () => <NavRoute route={featureItem?.featureDefaultRoute} />,
  },
];

const featureConfig: IFeatureConfig = {
  featureId: featureItem?.featureId,
  featureRoute: routes,
  notLoadResource: featureItem?.notLoadResource,
};

const Route = () => {
  return <FeatureRoute routes={routes} />;
};

export default featureLoader(featureConfig)(Route);