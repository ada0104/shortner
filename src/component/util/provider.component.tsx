import { ReactChild } from 'react';
import Header from './header.component';

interface Props {
  children: ReactChild;
}

const Provider = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Provider;
