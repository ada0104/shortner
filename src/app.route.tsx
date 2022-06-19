import Dashboard from '@app/component/util/dashboard.component';
import HomeRoute from './feature/home/home.route';
import LoginRoute from './feature/login/login.route';
import { FeaturePath } from './enum/feature-path.enum';
import { FeatureRouteType } from './enum/feature-page-type.enum';
import FeatureRoute, {
  IFeatureRouteConfig,
} from './component/route/feature-route.component';
import LandingRoute from './feature/landing/landing.route';
import ManagementRoute from './feature/management/management.route';
import ErrorRoute from './feature/error/error.route';
import UserCenterRoute from './feature/user-center/user-center.route';
import NavRoute from './component/route/nav-route.component';
import AuthGuard from './core/guard/auth.guard';
import Landing from './feature/landing/landing-index/landing-index.container';

const routes: IFeatureRouteConfig[] = [
  // #region
  {
    path: FeaturePath.Landing,
    element: LandingRoute,
  },
  {
    path: FeaturePath.Home,
    element: HomeRoute,
    guard: [AuthGuard],
  },
  {
    path: FeaturePath.Login,
    element: LoginRoute,
  },
  {
    path: FeaturePath.Error,
    element: ErrorRoute,
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
  // #endregion
  {
    path: FeatureRouteType.Match,
    element: Landing,
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
