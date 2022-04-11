import { serviceOptions } from 'api/index.defs';
import axios from 'axios';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import AppRoute from './app.route';
import Root from './component/util/root.component';
import { environment } from './core/environment';
import { store } from './store/store';

// create axios instance
serviceOptions.axios = axios.create({
  baseURL: environment.api_host,
  timeout: 1000 * 60,
});

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Root>
          <AppRoute />
        </Root>
      </HashRouter>
    </Provider>
  );
};

export default App;
