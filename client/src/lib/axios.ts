import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "constants/api";
import { ServerError } from "types/auth";
import { TOAST_ID } from "constants/toast";

const instance = axios.create({ baseURL: BASE_URL });

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
