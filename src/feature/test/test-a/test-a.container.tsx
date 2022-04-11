import BasePage from '@app/component/util/base-page.component';
import { Button } from '@mui/material';
import { TestService } from 'api/TestService';

const TestA = () => {
  const createTestItem = async () => {
    const create = await TestService.createTestUsingPost({
      testName: '123',
      testPrice: 123,
    });
    return create;
  };

  const testCreate = async () => {
    const create = await createTestItem();
    console.debug(create);
  };

  return (
    <BasePage>
      <h2>Test A</h2>

      <Button variant="contained" onClick={() => testCreate()}>
        Call Create
      </Button>
    </BasePage>
  );
};

export default TestA;
