import { IFeatureConfig } from '@app/component/util/feature-loader.component';
import { Feature } from '@app/enum/feature.enum';
import { createContext } from 'react';

export const FeatureContextValue: IFeatureConfig = {
  featureId: Feature.UnManaged,
  featureRoute: [],
  redirectElementPage: (direction: 'next' | 'prev') => {},
};

const FeatureContext = createContext(FeatureContextValue);

export default FeatureContext;
