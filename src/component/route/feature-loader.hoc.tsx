import FeatureContext from '@app/core/context/feature.context';
import {
  defaultFeatureMapItem,
  getFeatureDefaultPath,
  getFeatureFullPath,
  IFeatureMapItem,
} from '@app/enum/feature-map.enum';
import {
  FeaturePageType,
  FeatureRouteType,
} from '@app/enum/feature-page-type.enum';
import { Feature } from '@app/enum/feature.enum';
import useContent from '@app/core/hook/useContent';
import { FC, ReactElement, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IFeatureRouteConfig } from './feature-route.component';

export interface IFeatureConfig extends IFeatureMapItem {
  routeSet: IFeatureRouteConfig[];
}

const featureLoader =
  (featureConfig: IFeatureConfig) => (RouteComponent: ReactElement) => {
    const FeatureLoader: FC = () => {
      const location = useLocation();
      const navigate = useNavigate();

      // use feature content check feature is enable
      const isSuccess = featureConfig.notLoadResource
        ? true
        : useContent(
            featureConfig.featureId ?? defaultFeatureMapItem.featureId,
          );

      // #region Route Navigate

      const redirectElementPage = (direction: 'next' | 'back') => {
        // get current route index
        const currentRouteIndex = featureConfig.routeSet.findIndex((item) => {
          const pathItems = location.pathname.split('/');
          const lastPathItem =
            pathItems[pathItems.length - 1] || pathItems[pathItems.length - 2];

          return item.path === lastPathItem;
        });

        if (currentRouteIndex === -1) return;

        let navigatePath: string | undefined = undefined;

        switch (direction) {
          case 'next':
            navigatePath = featureConfig.routeSet[currentRouteIndex + 1].path;
            break;
          case 'back':
            navigatePath = featureConfig.routeSet[currentRouteIndex - 1].path;
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

      const nextFeature = (featureId: Feature) => {
        navigate(getFeatureDefaultPath(featureId));
      };

      const nextFeatureWithPage = (feature: {
        featureId: Feature;
        pageType: FeaturePageType;
      }) => {
        navigate(getFeatureFullPath(feature.featureId, feature.pageType));
      };

      // #endregion

      const contextValue = useMemo(
        () => ({
          ...featureConfig,
          redirectElementPage,
          nextFeature,
          nextFeatureWithPage,
        }),
        [location],
      );

      return (
        <FeatureContext.Provider value={contextValue}>
          {isSuccess ? RouteComponent : <></>}
        </FeatureContext.Provider>
      );
    };
    return FeatureLoader;
  };

export default featureLoader;
