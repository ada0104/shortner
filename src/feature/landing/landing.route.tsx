import featureLoader, {
  IFeatureConfig,
} from '@app/component/util/feature-loader.hoc';
import FeatureRoute, {
  IFeatureRouteConfig,
} from '@app/component/util/feature-route.component';
import NavRoute from '@app/component/util/nav-route.component';
import NotFound from '@app/feature/error/error-notFound/not-found.container';
import { getFeatureConfig } from '@app/enum/feature-map.enum';
import { FeatureRouteType } from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import Landing from './landing';

const featureItem = getFeatureConfig(Feature.Landing);

const routes: IFeatureRouteConfig[] = [
  {
    path: FeatureRouteType.Match,
    element: Landing,
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
