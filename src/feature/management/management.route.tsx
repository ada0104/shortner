import NavRoute from '@app/component/util/nav-route.component';
import featureLoader, {
  IFeatureConfig,
} from '@app/component/util/feature-loader.hoc';
import FeatureRoute, {
  IFeatureRouteConfig,
} from '@app/component/util/feature-route.component';
import { getFeatureConfig } from '@app/enum/feature-map.enum';
import { FeatureRouteType } from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import { FeaturePath } from '@app/enum/feature-path.enum';
import ManagementIndex from './management-index/management-index.container';
import UrlBoard from './url-board/url-board.container';
import GroupBoard from './group-board/group-board.container';
import EachGroupBoard from './each-group-board/each-group-board.container';

const featureItem = getFeatureConfig(Feature.Management);

const routes: IFeatureRouteConfig[] = [
  {
    path: featureItem?.featureRoute?.index,
    element: ManagementIndex,
  },
  {
    path: FeaturePath.UrlBoard,
    element: UrlBoard,
  },
  {
    path: FeaturePath.GroupBoard,
    element: GroupBoard,
  },
  {
    path: FeaturePath.EachGroupBoard,
    element: EachGroupBoard,
  },
  {
    path: FeatureRouteType.Match,
    element: ManagementIndex,
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
