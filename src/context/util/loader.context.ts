import { createContext } from 'react';

export interface ILoaderContext {
  loaderState: boolean;
  setLoaderState: Function;
}

export const LoaderContext = createContext<ILoaderContext>({
  loaderState: false,
  setLoaderState: () => {},
});
