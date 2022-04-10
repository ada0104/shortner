import BasePage from '@app/component/util/base-page.component';
import FeatureContext from '@app/context/feature.context';
import { ApiType } from '@app/enum/api-type.enum';
import { useAppDispatch } from '@app/hook/hook';
import { genApiTypeConfig } from '@app/service/util/api.service';
import { ApiAction } from '@app/store/api.slice';
import { Button } from '@mui/material';
import { useContext } from 'react';
import axios from 'axios';
import { environment } from '@app/core/environment';

const TestIndex = () => {
  const featureContext = useContext(FeatureContext);
  const dispatcher = useAppDispatch();

  const mockApi = (loader: boolean = true) => {
    const path = '/';
    const apiConfig = genApiTypeConfig(path, loader);

    dispatcher(ApiAction.setApiPending(apiConfig));

    axios
      .get(`${environment.api_host}${path}`)
      .then(() => {
        dispatcher(
          ApiAction.deleteApiPending({
            uniqueId: apiConfig.uniqueId,
            type: ApiType.Success,
          }),
        );
      })
      .catch(() => {
        dispatcher(
          ApiAction.deleteApiPending({
            uniqueId: apiConfig.uniqueId,
            type: ApiType.Failed,
          }),
        );
      });
  };

  return (
    <BasePage>
      <h2>Test Feature Id: {featureContext.featureId}</h2>
      <Button variant="contained" onClick={() => mockApi()}>
        模擬API(With Loader)
      </Button>
      <Button variant="contained" onClick={() => mockApi(false)}>
        模擬API(Without Loader)
      </Button>
    </BasePage>
  );
};

export default TestIndex;
