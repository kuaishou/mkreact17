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
