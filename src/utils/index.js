import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);
export const cleanObject = (data) => {
  const result = { ...data };
  Object.keys(result).forEach((key) => {
    const value = result[key];

    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  //防抖
  //每次变化就设置一个定时器
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    //上一次useeffect处理完清除后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
