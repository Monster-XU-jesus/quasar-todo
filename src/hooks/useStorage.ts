import { Nullable } from '@/types/base';

// 封装存储方式封装
const getStorageItem = (storage: Storage) => {
  // 通过返回函数的方式，使得外界使用能传参进来
  return function getItem<T>(key: string): Nullable<T> {
    try {
      const tmp = storage.getItem(key);
      if (tmp) {
        return JSON.parse(tmp) as T;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  };
};

const setStorageItem = (storage: Storage) => {
  // val 不用设置为any，因为传进来的只可能是any
  return function setItem(key: string, val: string): void {
    storage.setItem(key, JSON.stringify(val));
  };
};

export default function useStorage() {
  return {
    localStorage: {
      setItem: setStorageItem(localStorage),
      getItem: getStorageItem(localStorage),
    },
    sessionStorage: {
      setItem: setStorageItem(sessionStorage),
      getItem: getStorageItem(sessionStorage),
    },
  };
}
