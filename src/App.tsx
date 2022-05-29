import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import AppRoute from './app.route';
import Root from './core/component/root.component';
import { store } from './store/store';
import 'remixicon/fonts/remixicon.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3064B9',
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <Root>
              <AppRoute />
            </Root>
          </HashRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
