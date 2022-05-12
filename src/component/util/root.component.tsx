import { FC } from 'react';
import ApiLoadingManager from './api-loading-manager.component';

const Root: FC = (props) => {
  // const preSignComplete = useAppSelector((state) => state.user.preSignComplete);

  // useJwt();
  // useAuthentication();

  return (
    <>
      <ApiLoadingManager />
      {/* {preSignComplete ? <div>{props.children}</div> : <div />} */}
      {props.children}
    </>
  );
};

export default Root;
