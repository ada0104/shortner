import {
  PocClientAgentInfo,
  EnumPocClientAgentInfoBrowserType,
  EnumPocClientAgentInfoOsType,
  GoogleIdToken,
  JwtUser,
  EnumJwtUserLoginType,
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

export class PocService {
  /** Generate by swagger-axios-codegen */
  // @ts-nocheck
  /* eslint-disable */

  /**
   * POC: Generate JWT Token
   */
  static pocGenJwtTokenUsingPost(options: IRequestOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/poc/genJwtToken';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * POC: Get Client Agent Info
   */
  static pocGetClientAgentInfoUsingGet(options: IRequestOptions = {}): Promise<PocClientAgentInfo> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/poc/getClientAgentInfo';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * POC: Validate Google Oauth
   */
  static pocGoogleOauthUsingGet(
    params: {
      /** google auth token */
      token?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GoogleIdToken> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/poc/googleOauth';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { token: params['token'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * POC: Validate JWT Token
   */
  static pocValidJwtTokenUsingGet(
    params: {
      /** JWT Token */
      token?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<JwtUser> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/poc/validJwtToken';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { token: params['token'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}
