const localStorage = {
  setLocalStorage: (key: string, value: string) => window.localStorage.setItem(key, value),
  getLocalStorage: (key: string) => window.localStorage.getItem(key),
  removeLocalStorage: (key: string) => window.localStorage.removeItem(key),
};

export default localStorage;
