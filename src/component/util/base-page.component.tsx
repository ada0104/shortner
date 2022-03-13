import { ReactChild } from 'react';
import Header from './header.component';

interface Props {
  children?: ReactChild;
}

const defaultProps: Props = {
  children: undefined,
};

const BasePage = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

BasePage.defaultProps = defaultProps;

export default BasePage;
