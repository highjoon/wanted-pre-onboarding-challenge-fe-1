import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";
import authMessage from "constants/authMessage";

type AuthType = "signUp" | "signIn";

const SignUp = () => {
  const [authType, setAuthType] = useState<AuthType>("signUp");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onToggleAuthType = () => {
    authType === "signUp" ? setAuthType("signIn") : setAuthType("signUp");
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
    const emailInputValue = emailRef?.current?.value;
    const passwordInputValue = passwordRef?.current?.value;
    toast.success(`${emailInputValue} ${passwordInputValue}`);
  };

  return (
    <Container>
      <Title>{authType === "signUp" ? "회원가입" : "로그인"}</Title>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
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
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 25px;
`;

export default SignUp;
