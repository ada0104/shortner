import {
  FeatureInfo,
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

export class FeatureService {
  /** Generate by swagger-axios-codegen */
  // @ts-nocheck
  /* eslint-disable */

  /**
   * Get Feature Info
   */
  static getFeatureInfoUsingGet(
    params: {
      /** Feature Id */
      featureId?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FeatureInfo> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/feature/getFeatureInfo';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { featureId: params['featureId'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}
