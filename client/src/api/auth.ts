import client from "lib/axios";
import { IAuthForm, IAuthResponse } from "types/auth";

const authAPI = {
  signIn: async ({ email, password }: IAuthForm): Promise<IAuthResponse> => {
    const { data } = await client.post("/users/login", { email, password });
    return data;
  },

  signUp: async ({ email, password }: IAuthForm): Promise<IAuthResponse> => {
    const { data } = await client.post("/users/create", { email, password });
    return data;
  },
};

export default authAPI;
