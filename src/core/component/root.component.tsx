import { FC } from 'react';
import usePreset from '../hook/usePreset';
import ApiLoadingManager from './api-loading-manager.component';

const Root: FC = (props) => {
  // init app
  const presetComplete = usePreset();

  return (
    <>
      <ApiLoadingManager />
      {presetComplete ? <div>{props.children}</div> : <div />}
    </>
  );
};

export default Root;
