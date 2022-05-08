import useJwt from '@app/hook/useJwt';
import { FC } from 'react';
import ApiLoadingManager from './api-loading-manager.component';

const Root: FC = (props) => {
  // subscribe jwt token for authenticate
  const isFirstTimeAuthLoading = useJwt();

  return (
    <>
      <ApiLoadingManager />
      {isFirstTimeAuthLoading ? <div /> : <div>{props.children}</div>}
    </>
  );
};

export default Root;
