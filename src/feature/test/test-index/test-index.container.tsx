import BasePage from '@app/component/util/base-page.component';
import FeatureContext from '@app/context/feature.context';
import { useContext } from 'react';

const TestIndex = () => {
  const featureContext = useContext(FeatureContext);

  return (
    <BasePage>
      <h2>Test Feature Id: {featureContext.featureId}</h2>
    </BasePage>
  );
};

export default TestIndex;
