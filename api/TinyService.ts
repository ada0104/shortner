import {
  Tiny,
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

export class TinyService {
  /** Generate by swagger-axios-codegen */
  // @ts-nocheck
  /* eslint-disable */

  /**
   * Create Tiny Url
   */
  static createTinyUsingPost(
    params: {
      /** body */
      body: Tiny;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Tiny> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tiny';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update Tiny Url
   */
  static updateTinyUsingPatch(
    params: {
      /** body */
      body: Tiny;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Tiny> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tiny';

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Get Tiny Url
   */
  static getTinyUsingGet(
    params: {
      /** id */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Tiny> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tiny/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete Tiny Url
   */
  static deleteTinyUsingDelete(
    params: {
      /** id */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/tiny/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}
