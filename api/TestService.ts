import {
  Test,
  IList,
  List,
  IListResult,
  ListResultDto,
  IPagedResult,
  PagedResultDto,
  Dictionary,
  IDictionary,
  IRequestOptions,
  IRequestConfig,
  getConfigs,
  axios,
  basePath
} from './index.defs';

export class TestService {
  /** Generate by swagger-axios-codegen */
  // @ts-nocheck
  /* eslint-disable */

  /**
   * Query Test By Id
   */
  static queryTestByIdUsingGet(
    params: {
      /** test ide */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Test> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/test';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { id: params['id'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create Test
   */
  static createTestUsingPost(
    params: {
      /** test name */
      testName?: string;
      /** test price */
      testPrice?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Test> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/test';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = { testName: params['testName'], testPrice: params['testPrice'] };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete Test By Id
   */
  static deleteTestByIdUsingDelete(
    params: {
      /** test id */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/test';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);
      configs.params = { id: params['id'] };

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Query Test By Name
   */
  static queryTestByNameUsingGet(
    params: {
      /** test name */
      testName?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Test[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/test/queryByName';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { testName: params['testName'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}
