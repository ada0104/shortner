import FeatureRoute, {
  IFeatureRouteConfig,
} from '@app/component/route/feature-route.component';
import { getFeatureConfig } from '@app/enum/feature-map.enum';
import { FeatureRouteType } from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import ManagementIndex from './management-index/management-index.container';
import UrlBoard from './url-board/url-board.container';
import GroupBoard from './group-board/group-board.container';
import EachGroupBoard from './each-group-board/each-group-board.container';

const featureConfig = getFeatureConfig(Feature.Management);

const routes: IFeatureRouteConfig[] = [
  {
    path: featureConfig.featureRoute.index,
    element: ManagementIndex,
  },
  {
    path: featureConfig.featureRoute['url-board'],
    element: UrlBoard,
  },
  {
    path: featureConfig.featureRoute['group-board'],
    element: GroupBoard,
  },
  {
    path: featureConfig.featureRoute['group-board'],
    params: [':id'],
    element: EachGroupBoard,
  },
  {
    path: FeatureRouteType.Match,
    element: ManagementIndex,
  },
];

const Route = () => {
  return <FeatureRoute routes={routes} featureConfig={featureConfig} />;
};

export default Route;
