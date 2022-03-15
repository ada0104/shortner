import { Route, Routes } from 'react-router-dom';
import TestA from './test-a/test-a.container';
import TestB from './test-b/test-b.container';
import TestIndex from './test-index/test-index.container';

const TestRoute = () => {
  return (
    <Routes>
      <Route path="/index" element={<TestIndex />} />
      <Route path="/a" element={<TestA />} />
      <Route path="/b" element={<TestB />} />
    </Routes>
  );
};

export default TestRoute;
