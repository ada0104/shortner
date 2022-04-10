import BasePage from '@app/component/util/base-page.component';
import FeatureContext from '@app/context/feature.context';
import { useContext } from 'react';

const TestC = () => {
  const { redirectElementPage } = useContext(FeatureContext);

  return (
    <BasePage>
      <button type="button" onClick={() => redirectElementPage('next')}>
        Next
      </button>
      <button type="button" onClick={() => redirectElementPage('back')}>
        Prev
      </button>
      <h2>Test C</h2>
    </BasePage>
  );
};

export default TestC;
