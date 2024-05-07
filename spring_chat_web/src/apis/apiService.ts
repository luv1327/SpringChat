import { getDataFromApi, postDataToApi } from "../utils/apiHelper";
import localStorageAdapter from "../libs/localStorage";
import endpoints from "./endpoints";
type BodyData<T> = Record<string, T>;

const { clearLocalStorage } = localStorageAdapter;

const apiService = {
  loginCheck: async () => {
    try {
      const url = endpoints.loginCheck;
      const response = await getDataFromApi(url);
      return response;
    } catch (e) {
      throw e;
    }
  },

  logout: async (data: BodyData) => {
    try {
      const url = endpoints.logout;
      const response = await postDataToApi(data, url);
      return response;
    } catch (e) {
      throw e;
    }
  },
  login: async (data: BodyData) => {
    try {
      const url = endpoints.login;
      const response = await postDataToApi(data, url);
      return response;
    } catch (e) {
      throw e;
    }
  },
  signUp: async (data: BodyData) => {
    try {
      const url = endpoints.signUp;
      const response = await postDataToApi(data, url);
      return response;
    } catch (e) {
      throw e;
    }
  },
  getChatList: async () => {
    try {
      const url = endpoints.getChatList;
      const response = await getDataFromApi(url);
      return response;
    } catch (e) {
      throw e;
    }
  },

  getAllMessages: async (id: string | undefined) => {
    const url = `${endpoints.getAllMessages}/${id}`;
    const response = await getDataFromApi(url);
    return response;
  },
};

export default apiService;
