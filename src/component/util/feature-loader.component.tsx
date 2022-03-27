import FeatureContext, {
  FeatureContextValue,
} from '@app/context/feature.context';
import { Feature } from '@app/enum/feature.enum';
import useContent from '@app/hook/useContent';
import { ReactElement, useMemo } from 'react';
import { IFeatureRouteConfig } from './feature-route';
import Loader from './loader.component';

export interface IFeatureConfig {
  featureId?: Feature;
  featureRoute: IFeatureRouteConfig[];
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
          {isSuccess ? <RouteComponent /> : <Loader />}
        </FeatureContext.Provider>
      );
    };
    return FeatureLoader;
  };

export default featureLoader;
