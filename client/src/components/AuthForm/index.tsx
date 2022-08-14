import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { Box, Button, TextField } from "@mui/material";
import authMessage from "constants/authMessage";
import { TOAST_ID } from "constants/toast";
import { tokenKey } from "constants/auth";
import authAPI from "api/auth";
import localStorage from "utils/localStorage";
import { IAuthForm, ServerError, AuthType } from "types/auth";

interface IProps {
  authType: AuthType;
  onToggleAuthType: () => void;
}

const AuthForm = ({ authType, onToggleAuthType }: IProps) => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const signUp = async ({ email, password }: IAuthForm) => {
    try {
      const data = await authAPI.signUp({ email, password });
      toast.success(data.message, { toastId: TOAST_ID.SIGN_UP_SUCCEEDED });
    } catch (error) {
      const serverError = error as AxiosError<ServerError>;
      toast.error(serverError.response?.data.details, { toastId: TOAST_ID.SIGN_UP_ERROR });
    }
  };

  const signIn = async ({ email, password }: IAuthForm) => {
    try {
      const { message, token } = await authAPI.signIn({ email, password });
      localStorage.setStorage(tokenKey, token);
      toast.success(message, { toastId: TOAST_ID.SIGN_IN_SUCCEEDED });
      navigate("/todo");
    } catch (error) {
      const serverError = error as AxiosError<ServerError>;
      toast.error(serverError.response?.data.details, { toastId: TOAST_ID.SIGN_IN_ERROR });
    }
  };

  const onEmailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentInput = event.target.value;
    if (currentInput.includes("@") && currentInput.includes(".")) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const onPasswordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentInput = event.target.value;
    if (currentInput.length >= 8) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };

  const onClickSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      if (authType === "signUp") signUp({ email, password });
      if (authType === "signIn") signIn({ email, password });
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", width: "300px", gap: "25px" }}
        onSubmit={onClickSubmitHandler}
      >
        <TextField
          type="email"
          id="standard-basic"
          label="email"
          variant="standard"
          helperText={authMessage.EMAIL_HELPER}
          onChange={onEmailChangeHandler}
          inputRef={emailRef}
        />
        <TextField
          type="password"
          id="standard-basic"
          label="password"
          variant="standard"
          helperText={authMessage.PASSWORD_HELPER}
          onChange={onPasswordChangeHandler}
          inputRef={passwordRef}
        />
        <Button type="submit" variant="contained" disabled={!isValidEmail || !isValidPassword}>
          {authType === "signUp" ? "회원가입" : "로그인"}
        </Button>
        <Button variant="contained" color="secondary" onClick={onToggleAuthType}>
          {authType === "signUp" ? "로그인" : "회원가입"} 하기
        </Button>
      </Box>
    </>
  );
};

export default AuthForm;
