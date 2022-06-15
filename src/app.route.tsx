import Dashboard from '@app/core/component/dashboard.component';
import HomeRoute from './feature/home/home.route';
import { FeaturePath } from './enum/feature-path.enum';
import { FeatureRouteType } from './enum/feature-page-type.enum';
import FeatureRoute, {
  IFeatureRouteConfig,
} from './component/util/feature-route.component';
import LandingRoute from './feature/landing/landing.route';
import ManagementRoute from './feature/management/management.route';
import ErrorRoute from './feature/error/error.route';
import UserCenterRoute from './feature/user-center/user-center.route';
import NavRoute from './component/util/nav-route.component';
import AuthGuard from './core/guard/auth.guard';

const routes: IFeatureRouteConfig[] = [
  // #region
  {
    path: FeaturePath.Home,
    element: HomeRoute,
    guard: [AuthGuard],
  },
  {
    path: FeaturePath.Management,
    element: () => (
      <Dashboard>
        <ManagementRoute />
      </Dashboard>
    ),
  },
  {
    path: FeaturePath.UserCenter,
    element: UserCenterRoute,
  },
  {
    path: FeaturePath.Error,
    element: ErrorRoute,
  },
  // #endregion
  {
    path: FeatureRouteType.Match,
    element: LandingRoute,
  },
  {
    path: FeatureRouteType.All,
    element: () => <NavRoute />,
  },
];

const AppRoute = () => {
  return <FeatureRoute routes={routes} endFix="/*" />;
};

export default AppRoute;
