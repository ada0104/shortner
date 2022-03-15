import { HashRouter, Routes, Route } from 'react-router-dom';
import Root from './component/util/root.component';

// Route
import TestRoute from './feature/test/test.route';

// Component
import MUI from './component/test/mui.component';

const App = () => {
  return (
    <HashRouter>
      <Root>
        <Routes>
          <Route path="/test/*" element={<TestRoute />} />
          <Route path="/" element={<MUI />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "'1rem'" }}>
                <p>404 Not Found</p>
              </main>
            }
          />
        </Routes>
      </Root>
    </HashRouter>
  );
};

export default App;
