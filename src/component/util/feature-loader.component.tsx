import FeatureContext, {
  FeatureContextValue,
} from '@app/context/feature.context';
import {
  FeaturePageType,
  FeatureRouteType,
} from '@app/enum/feature-page-type.enum';
import { FeaturePath } from '@app/enum/feature-path.enum';
import { Feature } from '@app/enum/feature.enum';
import useContent from '@app/hook/useContent';
import { CircularProgress } from '@mui/material';
import { ReactElement, useMemo } from 'react';

export interface IFeatureConfig {
  featureId?: Feature;
  featureRoute: Array<{
    path: FeaturePageType | FeatureRouteType | FeaturePath | undefined;
    element: () => ReactElement;
  }>;
}

const featureLoader =
  (featureConfig: IFeatureConfig) => (RouteComponent: () => ReactElement) => {
    const FeatureLoader = () => {
      const isSuccess = useContent(
        featureConfig.featureId ?? Feature.UnManaged,
      );
      const contextValue = useMemo(
        () => ({
          ...FeatureContextValue,
          ...featureConfig,
        }),
        [],
      );
      return (
        <FeatureContext.Provider value={contextValue}>
          {isSuccess ? <RouteComponent /> : <CircularProgress />}
        </FeatureContext.Provider>
      );
    };
    return FeatureLoader;
  };

export default featureLoader;
