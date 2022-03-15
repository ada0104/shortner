import { Feature } from '@app/enum/feature.enum';
import useFeature from '@app/hook/useFeature';
import { Route, Routes } from 'react-router-dom';
import TestA from './test-a/test-a.container';
import TestB from './test-b/test-b.container';
import TestIndex from './test-index/test-index.container';

const TestRoute = () => {
  const isSuccess = useFeature(Feature.Test);

  return isSuccess ? (
    <Routes>
      <Route path="/index" element={<TestIndex />} />
      <Route path="/a" element={<TestA />} />
      <Route path="/b" element={<TestB />} />
      <Route path="*" element={<TestIndex />} />
    </Routes>
  ) : (
    <div />
  );
};

export default TestRoute;
