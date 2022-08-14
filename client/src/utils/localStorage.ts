const localStorage = {
  setStorage: (key: string, value: string) => window.localStorage.setItem(key, value),
  getStorage: (key: string) => window.localStorage.getItem(key),
  removeStorage: (key: string) => window.localStorage.removeItem(key),
};

export default localStorage;
