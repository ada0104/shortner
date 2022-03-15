import { useState, useLayoutEffect } from 'react';
import { Feature } from '@app/enum/feature.enum';
import { UtilAction } from '@app/store/util.slice';
import { useAppDispatch } from './hook';

const useFeature = (featureId: Feature) => {
  const dispatch = useAppDispatch();
  const [isSuccess, setSuccess] = useState(false);

  useLayoutEffect(() => {
    // open loader
    dispatch(UtilAction.changeLoader());

    // TODO: call api check feature data
    setTimeout(() => {
      console.debug(`Entry Feature: ${featureId}`);

      setSuccess(true);

      // close loader
      dispatch(UtilAction.changeLoader());
    }, 3000);
  }, []);

  return isSuccess;
};

export default useFeature;
