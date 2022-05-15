import { useAppSelector } from '@app/core/hook/hook';
import useAuthentication from '@app/core/hook/useAuthentication';
import useJwt from '@app/core/hook/useJwt';
import { FC } from 'react';
import usePreset from '../hook/usePreset';
import ApiLoadingManager from './api-loading-manager.component';

const Root: FC = (props) => {
  // preload setting data
  usePreset();
  useJwt();
  useAuthentication();

  const startUp = useAppSelector((state) => state.util.startUp);
  const isComplete =
    startUp.entryPath && startUp.jwtSetting && startUp.isValidUserComplete;

  return (
    <>
      <ApiLoadingManager />
      {isComplete ? <div>{props.children}</div> : <div />}
    </>
  );
};

export default Root;
