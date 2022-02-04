import { ReactChild, useMemo, useState } from 'react';
import { LoaderContext } from '@app/context/util/loader.context';
import Header from './header.component';

interface Props {
  children?: ReactChild;
}

const defaultProps: Props = {
  children: undefined,
};

const Provider = (props: Props) => {
  const [loaderState, setLoaderState] = useState(false);

  const loader = useMemo(
    () => ({ loaderState, setLoaderState }),
    [loaderState],
  );

  return (
    <LoaderContext.Provider value={loader}>
      <Header />
      {props.children}
    </LoaderContext.Provider>
  );
};

Provider.defaultProps = defaultProps;

export default Provider;
