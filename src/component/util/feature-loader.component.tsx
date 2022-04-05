import FeatureContext, {
  FeatureContextValue,
} from '@app/context/feature.context';
import { Feature } from '@app/enum/feature.enum';
import useContent from '@app/hook/useContent';
import { ReactElement, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IFeatureRouteConfig } from './feature-route';
import Loader from './loader.component';

export interface IFeatureConfig {
  featureId?: Feature;
  featureRoute: IFeatureRouteConfig[];
  redirectElementPage: (direction: 'next' | 'prev') => void;
}

const featureLoader =
  (featureConfig: Omit<IFeatureConfig, 'redirectElementPage'>) =>
  (RouteComponent: () => ReactElement) => {
    const FeatureLoader = () => {
      const location = useLocation();
      const navigate = useNavigate();
      const isSuccess = useContent(
        featureConfig.featureId ?? Feature.UnManaged,
      );

      const redirectElementPage = (direction: 'next' | 'prev') => {
        const currentRouteIndex = featureConfig.featureRoute.findIndex(
          (item) => {
            const pathItems = location.pathname.split('/');
            const lastPathItem =
              pathItems[pathItems.length - 1] ||
              pathItems[pathItems.length - 2];

            return item.path === lastPathItem;
          },
        );

        const navigatePath =
          featureConfig.featureRoute[
            direction === 'next' ? currentRouteIndex + 1 : currentRouteIndex - 1
          ]?.path;

        if (currentRouteIndex === -1 || !navigatePath) return;

        navigate(navigatePath);
      };

      const contextValue = useMemo(
        () => ({
          ...FeatureContextValue,
          ...featureConfig,
          redirectElementPage,
        }),
        [location],
      );

      return (
        <FeatureContext.Provider value={contextValue}>
          {isSuccess ? <RouteComponent /> : <Loader />}
        </FeatureContext.Provider>
      );
    };
    return FeatureLoader;
  };

export default featureLoader;
