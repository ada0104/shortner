import { serviceOptions } from '@api/index.defs';
import { environment } from '@app/core/environment';
import { ApiType } from '@app/enum/api-type.enum';
import { useAppDispatch, useAppSelector } from '@app/core/hook/hook';
import { genApiTypeConfig } from '@app/service/util/api.service';
import { ApiAction } from '@app/store/api.slice';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { FC, memo, useEffect, useMemo } from 'react';
import Loader from '../../component/util/loader.component';
import { UserAction } from '@app/store/user.slice';
import { useNavigate } from 'react-router-dom';
import { getFeatureDefaultPath } from '@app/enum/feature-map.enum';
import { Feature } from '@app/enum/feature.enum';
import { removeStorageItem } from '@app/service/util/storage.service';
import { StorageType } from '@app/enum/storage-type.enum';

const ax = axios.create({
  baseURL: environment.api_host,
  timeout: 1000 * 60,
  headers: {},
});

const ApiLoadingManager: FC = () => {
  const pendingList = useAppSelector((state) => state.api.apiPending);
  const historyList = useAppSelector((state) => state.api.apiHistory);
  const jwtToken = useAppSelector((state) => state.user.jwtToken);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const interceptors = useMemo(() => {
    const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
      // set unique id in header
      const apiConfig = genApiTypeConfig(config.url!);
      config.headers = { ...config.headers, uniqueId: apiConfig.uniqueId };

      if (jwtToken) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
      }

      // set api pending
      dispatch(ApiAction.setApiPending(apiConfig));

      return config;
    };

    const onRequestError = (error: AxiosError): Promise<AxiosError> => {
      if (error.config.headers) {
        // get unique id in header
        const { uniqueId } = error.config.headers;

        // delete api pending
        dispatch(
          ApiAction.deleteApiPending({
            uniqueId: uniqueId as string,
            type: ApiType.Failed,
            errorMsg: error.message,
          }),
        );
      }

      return Promise.reject(error);
    };

    const onResponse = (response: AxiosResponse): AxiosResponse => {
      if (response.config.headers) {
        // get unique id in header
        const { uniqueId } = response.config.headers;

        // delete api pending
        dispatch(
          ApiAction.deleteApiPending({
            uniqueId: uniqueId as string,
            type: ApiType.Success,
            statusCode: response.status,
          }),
        );
      }

      return response;
    };

    const onResponseError = (error: AxiosError): Promise<AxiosError> => {
      if (error.config.headers) {
        // get unique id in header
        const { uniqueId } = error.config.headers;

        // delete api pending
        dispatch(
          ApiAction.deleteApiPending({
            uniqueId: uniqueId as string,
            type: ApiType.Failed,
            statusCode: error.response?.status ?? 0,
            errorMsg: error.message,
          }),
        );
      }

      // 401
      if (error.response?.status === 401) {
        dispatch(UserAction.setJwtToken(null));
        dispatch(UserAction.setUserInfo(null));
        removeStorageItem(StorageType.JWT_TOKEN);
        navigate(getFeatureDefaultPath(Feature.Login));
      }

      alert(`Response Error: ${error.response?.status}`);

      return Promise.reject(error);
    };

    return {
      onRequest,
      onRequestError,
      onResponse,
      onResponseError,
    };
  }, [jwtToken]);

  useEffect(() => {
    // add request interceptors
    const reqInterceptor = ax.interceptors.request.use(
      interceptors.onRequest,
      interceptors.onRequestError,
    );
    // add response interceptors
    const resInterceptor = ax.interceptors.response.use(
      interceptors.onResponse,
      interceptors.onResponseError,
    );

    serviceOptions.axios = ax;

    return () => {
      // remove all intercepts when done
      ax.interceptors.request.eject(reqInterceptor);
      ax.interceptors.response.eject(resInterceptor);
    };
  }, [jwtToken]);

  useEffect(() => {
    console.debug(historyList);
  }, [historyList]);

  const loadingCount = Object.values(pendingList).filter(
    (item) => item.loaderEffect,
  ).length;

  return loadingCount ? <Loader /> : <div />;
};

export default memo(ApiLoadingManager);
