import { ReactChild } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import Header from './header.component';
import { store } from '../../store/store';

interface Props {
  children?: ReactChild;
}

const defaultProps: Props = {
  children: undefined,
};

const Provider = (props: Props) => {
  return (
    <ReduxProvider store={store}>
      <Header />
      {props.children}
    </ReduxProvider>
  );
};

Provider.defaultProps = defaultProps;

export default Provider;
