import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import AppRoute from './app.route';
import Root from './core/component/root.component';
import { store } from './store/store';
import 'remixicon/fonts/remixicon.css';

const App = () => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <HashRouter>
          <Root>
            <AppRoute />
          </Root>
        </HashRouter>
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
