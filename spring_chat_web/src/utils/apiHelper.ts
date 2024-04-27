import axios from "axios";
import localStorageAdapter from "../libs/localStorage";
import localStorageKeys from "../config/localStorageKeys";

type RequestDataType = object;
type UrlType = string;
type Header = {
  "Content-Type": string;
  Authorization?: string;
};

const contentType = "application/json";

const postDataToApi = async (requestData: RequestDataType, url: UrlType) => {
  try {
    const headers: Header = {
      "Content-Type": contentType,
    };
    const bearerToken = localStorageAdapter.getLocalStorage(
      localStorageKeys.JWT_TOKEN
    );
    if (bearerToken) {
      headers.Authorization = `Bearer ${bearerToken}`;
    }
    let data = JSON.stringify({
      ...requestData,
    });
    let config = {
      method: "post",
      url: url,
      data,
      headers,
    };
    let response = await axios(config);
    return response.data;
  } catch (e) {
    throw e;
  }
};

const getDataFromApi = async (url: string) => {
  try {
    const headers: Header = {
      "Content-Type": contentType,
    };
    const bearerToken = localStorageAdapter.getLocalStorage(
      localStorageKeys.JWT_TOKEN
    );

    if (bearerToken) {
      headers.Authorization = `Bearer ${bearerToken}`;
    }

    let config = {
      method: "get",
      url: url,
      headers,
    };
    let response = await axios(config);
    return response.data;
  } catch (e) {
    throw e;
  }
};

export { getDataFromApi, postDataToApi };
