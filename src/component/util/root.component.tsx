import { ReactChild } from 'react';
import { CircularProgress } from '@mui/material';
import { useAppSelector } from '@app/hook/hook';

interface Props {
  children?: ReactChild;
}

const defaultProps: Props = {
  children: undefined,
};

const Root = (props: Props) => {
  const showLoader = useAppSelector((state) => state.util.showLoader);

  return (
    <>
      {showLoader && <CircularProgress />}
      {props.children}
    </>
  );
};

Root.defaultProps = defaultProps;

export default Root;
