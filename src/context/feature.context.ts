import { IFeatureConfig } from '@app/enum/feature-map.enum';
import { Feature } from '@app/enum/feature.enum';
import { createContext } from 'react';

export const FeatureContextValue: IFeatureConfig = {
  featureId: Feature.UnManaged,
  featureRoute: {},
};

const FeatureContext = createContext(FeatureContextValue);

export default FeatureContext;
