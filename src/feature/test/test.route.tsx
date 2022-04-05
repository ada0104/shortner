import featureLoader, {
  IFeatureConfig,
} from '@app/component/util/feature-loader.component';
import FeatureRoute, {
  IFeatureRouteConfig,
} from '@app/component/util/feature-route';
import { getFeatureConfig } from '@app/enum/feature-map.enum';
import { FeatureRouteType } from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import TestA from './test-a/test-a.container';
import TestB from './test-b/test-b.container';
import TestC from './test-c/test-c.container';
import TestIndex from './test-index/test-index.container';

const featureItem = getFeatureConfig(Feature.Test);

const routes: IFeatureRouteConfig[] = [
  {
    path: featureItem?.featureRoute.index,
    element: TestIndex,
  },
  {
    path: featureItem?.featureRoute.a,
    element: TestA,
  },
  {
    path: featureItem?.featureRoute.b,
    element: TestB,
  },
  {
    path: featureItem?.featureRoute.c,
    element: TestC,
  },
  {
    path: FeatureRouteType.All,
    element: TestIndex,
  },
];

const featureConfig: Omit<IFeatureConfig, 'redirectElementPage'> = {
  featureId: featureItem?.featureId,
  featureRoute: routes,
};

const TestRoute = () => {
  return <FeatureRoute routes={routes} />;
};

export default featureLoader(featureConfig)(TestRoute);
