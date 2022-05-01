import HomeRoute from './feature/home/home.route';
import { FeaturePath } from './enum/feature-path.enum';
import { FeatureRouteType } from './enum/feature-page-type.enum';
import FeatureRoute, {
  IFeatureRouteConfig,
} from './component/util/feature-route.component';
import NotFound from './feature/error/error-notFound/not-found.container';
import landingRoute from './feature/landing/landing.route';
import errorRoute from './feature/error/error.route';
import NavRoute from './component/util/nav-route.component';

const routes: IFeatureRouteConfig[] = [
  {
    path: FeaturePath.Home,
    element: HomeRoute,
  },
  {
    path: FeaturePath.Error,
    element: errorRoute,
  },
  {
    path: FeatureRouteType.Match,
    element: landingRoute,
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
