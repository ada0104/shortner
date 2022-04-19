import BasePage from '@app/component/util/base-page.component';
import FeatureContext from '@app/context/feature.context';

import { useContext } from 'react';

const HomeIndex = () => {
  const featureContext = useContext(FeatureContext);
  return (
    <BasePage>
      <h2>Feature Id: {featureContext.featureId}</h2>
    </BasePage>
  );
};

export default HomeIndex;
