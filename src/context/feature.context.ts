import { IFeatureConfig } from '@app/component/util/feature-loader.component';
import { Feature } from '@app/enum/feature.enum';
import { createContext } from 'react';

export interface IFeatureContextConfig extends IFeatureConfig {
  redirectElementPage: (direction: 'next' | 'back') => void;
}

export const FeatureContextValue: IFeatureContextConfig = {
  featureId: Feature.UnManaged,
  featureRoute: [],
  redirectElementPage: (direction: 'next' | 'back') => {},
};

const FeatureContext = createContext(FeatureContextValue);

export default FeatureContext;
