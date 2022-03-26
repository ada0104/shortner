import TestRoute from './feature/test/test.route';
import MUI from './component/test/mui.component';
import { FeaturePath } from './enum/feature-path.enum';
import { FeatureRouteType } from './enum/feature-page-type.enum';
import FeatureRoute, {
  IFeatureRouteConfig,
} from './component/util/feature-route';

const routes: IFeatureRouteConfig[] = [
  {
    path: FeaturePath.Test,
    element: TestRoute,
  },
  {
    path: FeatureRouteType.Match,
    element: MUI,
  },
  {
    path: FeatureRouteType.All,
    element: () => (
      <main style={{ padding: "'1rem'" }}>
        <p>404 Not Found</p>
      </main>
    ),
  },
];

const AppRoute = () => {
  return <FeatureRoute route={routes} endFix="/*" />;
};

export default AppRoute;
