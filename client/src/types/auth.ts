export interface IAuthForm {
  email: string;
  password: string;
}

export interface IAuthResponse {
  message: string;
  token: string;
}

export type ServerError = { details: string };

export type AuthType = "signUp" | "signIn";
