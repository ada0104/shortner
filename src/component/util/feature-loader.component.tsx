import FeatureContext, {
  FeatureContextValue,
} from '@app/context/feature.context';
import { FeatureRouteType } from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import useContent from '@app/hook/useContent';
import { ReactElement, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IFeatureRouteConfig } from './feature-route';
import Loader from './loader.component';

export interface IFeatureConfig {
  featureId?: Feature;
  featureRoute: IFeatureRouteConfig[];
}

const featureLoader =
  (featureConfig: IFeatureConfig) => (RouteComponent: () => ReactElement) => {
    const FeatureLoader = () => {
      const location = useLocation();
      const navigate = useNavigate();

      // use feature content check feature is enable
      const isSuccess = useContent(
        featureConfig.featureId ?? Feature.UnManaged,
      );

      // #region Route Navigate

      const redirectElementPage = (direction: 'next' | 'back') => {
        // get current route index
        const currentRouteIndex = featureConfig.featureRoute.findIndex(
          (item) => {
            const pathItems = location.pathname.split('/');
            const lastPathItem =
              pathItems[pathItems.length - 1] ||
              pathItems[pathItems.length - 2];

            return item.path === lastPathItem;
          },
        );

        if (currentRouteIndex === -1) return;

        let navigatePath: string | undefined = undefined;

        switch (direction) {
          case 'next':
            navigatePath =
              featureConfig.featureRoute[currentRouteIndex + 1].path;
            break;
          case 'back':
            navigatePath =
              featureConfig.featureRoute[currentRouteIndex - 1].path;
            break;
          default:
            break;
        }

        // exclude Feature Route Type
        if (
          !navigatePath ||
          Object.values(FeatureRouteType).includes(
            navigatePath as FeatureRouteType,
          )
        ) {
          return;
        }

        navigate(navigatePath);
      };

      // #endregion

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
