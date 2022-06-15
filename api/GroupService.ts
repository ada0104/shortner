import {
  Group,
  GroupMember,
  EnumGroupMemberRole,
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

export class GroupService {
  /** Generate by swagger-axios-codegen */
  // @ts-nocheck
  /* eslint-disable */

  /**
   * Get Group List
   */
  static getGroupsUsingGet(options: IRequestOptions = {}): Promise<Group[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/group';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create Group
   */
  static createTinyUsingPost(
    params: {
      /** body */
      body: Group;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Group> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/group';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update Group
   */
  static updateTinyUsingPatch(
    params: {
      /** body */
      body: Group;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Group> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/group';

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Get Group By Id
   */
  static getGroupByIdUsingGet(
    params: {
      /** id */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Group> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/group/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete Group
   */
  static deleteTinyUsingDelete(
    params: {
      /** id */
      id?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Group> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/group/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}
