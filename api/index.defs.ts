/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */
export interface IRequestOptions {
  headers?: any;
}

export interface IRequestPromise<T = any> extends Promise<IRequestResponse<T>> {}

export interface IRequestResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

export interface IRequestInstance {
  (config: any): IRequestPromise;
  (url: string, config?: any): IRequestPromise;
  request<T = any>(config: any): IRequestPromise<T>;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: IRequestInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class AuthValid {
  /**  */
  'token'?: string;

  constructor(data: undefined | any = {}) {
    this['token'] = data['token'];
  }
}

export class GoogleIdToken {
  /**  */
  'header'?: object;

  /**  */
  'payload'?: object;

  /**  */
  'signatureBytes'?: string;

  /**  */
  'signedContentBytes'?: string;

  constructor(data: undefined | any = {}) {
    this['header'] = data['header'];
    this['payload'] = data['payload'];
    this['signatureBytes'] = data['signatureBytes'];
    this['signedContentBytes'] = data['signedContentBytes'];
  }
}

export class JwtUser {
  /**  */
  'email'?: string;

  /**  */
  'id'?: string;

  /**  */
  'loginType'?: EnumJwtUserLoginType;

  /**  */
  'name'?: string;

  /**  */
  'token'?: string;

  constructor(data: undefined | any = {}) {
    this['email'] = data['email'];
    this['id'] = data['id'];
    this['loginType'] = data['loginType'];
    this['name'] = data['name'];
    this['token'] = data['token'];
  }
}

export class PocClientAgentInfo {
  /**  */
  'browserType'?: EnumPocClientAgentInfoBrowserType;

  /**  */
  'browserVersion'?: string;

  /**  */
  'exception'?: string;

  /**  */
  'ip'?: string;

  /**  */
  'osType'?: EnumPocClientAgentInfoOsType;

  /**  */
  'osVersion'?: string;

  constructor(data: undefined | any = {}) {
    this['browserType'] = data['browserType'];
    this['browserVersion'] = data['browserVersion'];
    this['exception'] = data['exception'];
    this['ip'] = data['ip'];
    this['osType'] = data['osType'];
    this['osVersion'] = data['osVersion'];
  }
}

export class Tiny {
  /**  */
  'id'?: string;

  /**  */
  'url'?: string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['url'] = data['url'];
  }
}

export class UserInfo {
  /**  */
  'email'?: string;

  /**  */
  'id'?: string;

  /**  */
  'isApple'?: boolean;

  /**  */
  'isFacebook'?: boolean;

  /**  */
  'isGoogle'?: boolean;

  /**  */
  'name'?: string;

  /**  */
  'photoUrl'?: string;

  constructor(data: undefined | any = {}) {
    this['email'] = data['email'];
    this['id'] = data['id'];
    this['isApple'] = data['isApple'];
    this['isFacebook'] = data['isFacebook'];
    this['isGoogle'] = data['isGoogle'];
    this['name'] = data['name'];
    this['photoUrl'] = data['photoUrl'];
  }
}
export enum EnumJwtUserLoginType {
  'GENERAL' = 'GENERAL',
  'GOOGLE' = 'GOOGLE',
  'FACEBOOK' = 'FACEBOOK',
  'APPLE' = 'APPLE'
}
export enum EnumPocClientAgentInfoBrowserType {
  'EDGE' = 'EDGE',
  'SAFARI' = 'SAFARI',
  'OPERA' = 'OPERA',
  'CHROME' = 'CHROME',
  'FIREFOX' = 'FIREFOX'
}
export enum EnumPocClientAgentInfoOsType {
  'WINDOWS' = 'WINDOWS',
  'MAC' = 'MAC',
  'LINUX' = 'LINUX',
  'ANDROID' = 'ANDROID',
  'IPHONE' = 'IPHONE',
  'IPAD' = 'IPAD'
}
