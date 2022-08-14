import { toast } from "react-toastify";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { BASE_URL } from "constants/api";
import { TOAST_ID } from "constants/toast";
import { tokenKey } from "constants/auth";
import { ServerError } from "types/auth";
import localStorage from "utils/localStorage";

const token = localStorage.getStorage(tokenKey);

const instance = axios.create({ baseURL: BASE_URL });

const setToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (token) config.headers = { Authorization: token };
  return config;
};

instance.interceptors.request.use(setToken);

instance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    const serverError = error as AxiosError<ServerError>;
    const data = serverError.response;
    toast.error(data?.data.details, { toastId: TOAST_ID.HTTP_ERROR });
    throw new Error(error);
  }
);

export default instance;
