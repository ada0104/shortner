import Dashboard from '@app/component/util/dashboard.component';
import HomeRoute from './feature/home/home.route';
import LoginRoute from './feature/login/login.route';
import AccountRoute from './feature/account/account.route';
import PasswordRoute from './feature/password/password.route';
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
import { getFeatureDefaultPath } from './enum/feature-map.enum';
import { Feature } from './enum/feature.enum';

const routes: IFeatureRouteConfig[] = [
  // #region
  {
    path: FeaturePath.Landing,
    element: LandingRoute,
  },
  {
    path: FeaturePath.Login,
    element: LoginRoute,
  },
  {
    path: FeaturePath.Account,
    element: AccountRoute,
  },
  {
    path: FeaturePath.Home,
    element: HomeRoute,
    guard: [AuthGuard],
  },
  {
    path: FeaturePath.Password,
    element: PasswordRoute,
    guard: [AuthGuard],
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
    guard: [AuthGuard],
  },
  {
    path: FeaturePath.UserCenter,
    element: UserCenterRoute,
    guard: [AuthGuard],
  },
  // #endregion
  {
    path: FeatureRouteType.Match,
    element: () => <NavRoute route={Feature.Landing} />,
  },
  {
    path: FeatureRouteType.All,
    element: () => <NavRoute route={Feature.Landing} />,
  },
];

const AppRoute = () => {
  return <FeatureRoute routes={routes} endFix="/*" />;
};

export default AppRoute;
