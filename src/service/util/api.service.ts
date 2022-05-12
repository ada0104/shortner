import { ApiType } from '@app/enum/api-type.enum';
import { IApiTypeConfig } from '@app/store/api.slice';
import { v4 as uuid } from 'uuid';

export const genApiTypeConfig = (
  path: string,
  loaderEffect: boolean = true,
): IApiTypeConfig => {
  const uniqueId = uuid();

  const result: IApiTypeConfig = {
    uniqueId,
    path,
    loaderEffect,
    type: ApiType.Pending,
    statusCode: 0,
  };

  return result;
};
