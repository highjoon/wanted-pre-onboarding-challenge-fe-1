export interface IAuthForm {
  email: string;
  password: string;
}

export interface IAuthResponse {
  message: string;
  token: string;
}
