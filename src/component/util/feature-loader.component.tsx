import { Feature } from '@app/enum/feature.enum';
import useFeature from '@app/hook/useFeature';
import { CircularProgress } from '@mui/material';
import { ReactElement } from 'react';

const featureLoader =
  (featureId: Feature) => (RouteComponent: () => ReactElement) => {
    const FeatureLoader = () => {
      const isSuccess = useFeature(featureId);
      return isSuccess ? <RouteComponent /> : <CircularProgress />;
    };
    return FeatureLoader;
  };

export default featureLoader;
