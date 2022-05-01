import featureLoader, {
  IFeatureConfig,
} from '@app/component/util/feature-loader.hoc';
import FeatureRoute, {
  IFeatureRouteConfig,
} from '@app/component/util/feature-route.component';
import NavRoute from '@app/component/util/nav-route.component';
import { getFeatureConfig } from '@app/enum/feature-map.enum';
import {
  FeaturePageType,
  FeatureRouteType,
} from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import ErrorNotFound from './error-notFound/not-found.container';

const featureItem = getFeatureConfig(Feature.Error);

const routes: IFeatureRouteConfig[] = [
  {
    path: FeaturePageType.NotFound,
    element: ErrorNotFound,
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