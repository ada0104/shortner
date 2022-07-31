import { IFeatureConfig } from '@app/component/route/feature-loader.hoc';
import { defaultFeatureMapItem } from '@app/enum/feature-map.enum';
import { FeaturePageType } from '@app/enum/feature-page-type.enum';
import { FeaturePath } from '@app/enum/feature-path.enum';
import { Feature } from '@app/enum/feature.enum';
import { createContext } from 'react';

export interface IFeatureContextConfig extends IFeatureConfig {
  redirectElementPage: (direction: 'next' | 'back') => void;
  nextFeature: (featureId: Feature) => void;
  nextFeatureWithPage: (feature: {
    featureId: Feature;
    pageType: FeaturePageType;
  }) => void;
}

export const FeatureContextValue: IFeatureContextConfig = {
  ...defaultFeatureMapItem,
  routeSet: [],
  redirectElementPage: (direction: 'next' | 'back') => {},
  nextFeature: (featureId: Feature) => {},
  nextFeatureWithPage: (feature: {
    featureId: Feature;
    pageType: FeaturePageType;
  }) => {},
};

const FeatureContext = createContext(FeatureContextValue);

export default FeatureContext;
