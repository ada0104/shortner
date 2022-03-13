import { ReactChild } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

interface Props {
  children?: ReactChild;
}

const defaultProps: Props = {
  children: undefined,
};

const Root = (props: Props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

Root.defaultProps = defaultProps;

export default Root;
