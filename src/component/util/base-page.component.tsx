import { FC } from 'react';
import Header from './header.component';

const BasePage: FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default BasePage;
