import NavRoute from '@app/component/route/nav-route.component';
import FeatureRoute, {
  IFeatureRouteConfig,
} from '@app/component/route/feature-route.component';
import { getFeatureConfig } from '@app/enum/feature-map.enum';
import { FeatureRouteType } from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import LoginIndex from './login-index/login-index.container';
import LoginAccount from './account/account.container';
import LoginPassword from './password/password.container';

const featureConfig = getFeatureConfig(Feature.Login);

const routes: IFeatureRouteConfig[] = [
  {
    path: featureConfig.featureRoute.index,
    element: LoginIndex,
  },
  {
    path: featureConfig.featureRoute.account,
    element: LoginAccount,
  },
  {
    path: featureConfig.featureRoute.account,
    element: LoginPassword,
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
