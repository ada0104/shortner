import BasePage from '@app/component/util/base-page.component';
import FeatureContext from '@app/core/context/feature.context';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeIndex = () => {
  const featureContext = useContext(FeatureContext);

  return (
    <BasePage>
      <h2>Feature Id: {featureContext.featureId}</h2>
    </BasePage>
  );
};

export default HomeIndex;
