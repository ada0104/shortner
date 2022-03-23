import { useState, useLayoutEffect } from 'react';
import { Feature } from '@app/enum/feature.enum';

const useContent = (featureId: Feature) => {
  const [isSuccess, setSuccess] = useState(false);

  useLayoutEffect(() => {
    // TODO: call api check feature data
    setTimeout(() => {
      console.debug(`Entry Feature: ${featureId}`);

      setSuccess(true);
    }, 3000);
  }, []);

  return isSuccess;
};

export default useContent;
