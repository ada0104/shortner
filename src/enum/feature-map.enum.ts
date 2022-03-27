import { cloneDeep } from 'lodash';
import { FeaturePageType } from './feature-page-type.enum';
import { FeaturePath } from './feature-path.enum';
import { Feature } from './feature.enum';

export interface IFeatureMapItem {
  featureId: Feature;
  featurePath: FeaturePath;
  featureRoute: { [key in FeaturePageType]?: FeaturePageType };
}

const featureMap: IFeatureMapItem[] = [
  {
    featureId: Feature.Test,
    featurePath: FeaturePath.Test,
    featureRoute: {
      index: FeaturePageType.Index,
      a: FeaturePageType.A,
      b: FeaturePageType.B,
      c: FeaturePageType.C,
    },
  },
];

export const getFeatureConfig = (featureId: Feature) => {
  return cloneDeep([...featureMap]).find((x) => x.featureId === featureId);
};
