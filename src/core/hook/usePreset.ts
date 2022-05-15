import { UtilAction } from '@app/store/util.slice';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@app/core/hook/hook';

const usePreset = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // set entry path
    dispatch(UtilAction.setEntryPath(location.pathname));
  }, []);
};

export default usePreset;
