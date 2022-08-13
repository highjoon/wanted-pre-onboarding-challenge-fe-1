import instance from "lib/axios";
import { IAuthForm, IAuthResponse } from "types/auth";

const authAPI = {
  signIn: async ({ email, password }: IAuthForm): Promise<IAuthResponse> => {
    const { data } = await instance.post("/users/login", { email, password });
    return data;
  },

  signUp: async ({ email, password }: IAuthForm): Promise<IAuthResponse> => {
    const { data } = await instance.post("/users/create", { email, password });
    return data;
  },
};

export default authAPI;
