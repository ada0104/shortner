import { Route, Routes } from 'react-router-dom';
import TestRoute from './feature/test/test.route';
import MUI from './component/test/mui.component';

const AppRoute = () => {
  return (
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
  );
};

export default AppRoute;
