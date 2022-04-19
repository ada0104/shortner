import featureLoader, {
  IFeatureConfig,
} from '@app/component/util/feature-loader.component';
import FeatureRoute, {
  IFeatureRouteConfig,
} from '@app/component/util/feature-route';
import { getFeatureConfig } from '@app/enum/feature-map.enum';
import { FeatureRouteType } from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import HomeIndex from './home-index/home-index.container';

const featureItem = getFeatureConfig(Feature.Home);

const routes: IFeatureRouteConfig[] = [
  {
    path: featureItem?.featureRoute.index,
    element: HomeIndex,
  },
  {
    path: FeatureRouteType.All,
    element: HomeIndex,
  },
];

const featureConfig: IFeatureConfig = {
  featureId: featureItem?.featureId,
  featureRoute: routes,
};

const HomeRoute = () => {
  return <FeatureRoute route={routes} />;
};

export default featureLoader(featureConfig)(HomeRoute);
