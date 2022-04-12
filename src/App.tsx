import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import AppRoute from './app.route';
import Root from './component/util/root.component';
import { store } from './store/store';

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
