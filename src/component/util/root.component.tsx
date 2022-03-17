import { ReactChild } from 'react';

interface Props {
  children?: ReactChild;
}

const defaultProps: Props = {
  children: undefined,
};

const Root = (props: Props) => {
  return <div>{props.children}</div>;
};

Root.defaultProps = defaultProps;

export default Root;
