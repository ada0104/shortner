import { Feature } from './../../enum/feature.enum';
import { FeatureService } from './../../../api/FeatureService';

// Get feature information
export const getFeatureInfo = async (featureId: Feature) => {
  return await FeatureService.getFeatureInfoUsingGet({ featureId });
};
