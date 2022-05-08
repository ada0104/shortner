import { StorageType } from '@app/enum/storage-type.enum';

export function getStorageItem<T>(type: StorageType) {
  const value = localStorage.getItem(type);
  return value !== null ? (JSON.parse(value) as T) : value;
}

export const setStorageItem = (type: StorageType, value: unknown) => {
  localStorage.setItem(type, JSON.stringify(value));
};
