import { useAppSelector } from '@app/hook/hook';
import { FC } from 'react';
import ApiLoadingManager from './api-loading-manager.component';

const Root: FC = (props) => {
  return (
    <>
      <ApiLoadingManager />
      <div>{props.children}</div>
    </>
  );
};

export default Root;
