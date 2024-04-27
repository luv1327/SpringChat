const localStorageAdapter = {
  setLocalStorage: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      throw e;
    }
  },
  getLocalStorage: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      throw e;
    }
  },
  removeLocalStorage: (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      throw e;
    }
  },
  clearLocalStorage: () => {
    try {
      localStorage.clear();
    } catch (e) {
      throw e;
    }
  },
};

export default localStorageAdapter;
