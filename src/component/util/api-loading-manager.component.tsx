import { useAppSelector } from '@app/hook/hook';
import { FC } from 'react';
import Loader from './loader.component';

const ApiLoadingManager: FC = () => {
  const pendingList = useAppSelector((state) => state.api.apiPending);
  const historyList = useAppSelector((state) => state.api.apiHistory);

  const loadingCount = Object.values(pendingList).filter(
    (item) => item.loaderEffect,
  ).length;

  console.debug(historyList);

  return loadingCount ? <Loader /> : <div />;
};

export default ApiLoadingManager;
