import { getFeatureDefaultPath } from '@app/enum/feature-map.enum';
import { useNavigate } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import { Feature } from '@app/enum/feature.enum';
import { getFeatureInfo } from '@app/service/feature/feature.service';

const useContent = (featureId: Feature) => {
  const [isSuccess, setSuccess] = useState(false);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const loadFeatureData = async () => {
      const featureInfo = await getFeatureInfo(featureId);
      if (featureInfo.featureState) {
        setSuccess(true);
      } else {
        alert('Feature is not open!');
        // TODO: Feature is not open
        navigate(getFeatureDefaultPath(Feature.Landing));
      }
    };
    loadFeatureData();
  }, []);

  return isSuccess;
};

export default useContent;
