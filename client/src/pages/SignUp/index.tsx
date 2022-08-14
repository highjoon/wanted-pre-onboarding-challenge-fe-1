import { useState } from "react";
import { Container, Title } from "pages/SignUp/styles";
import { AuthForm } from "components";
import { AuthType } from "types/auth";

const SignUp = () => {
  const [authType, setAuthType] = useState<AuthType>("signIn");

  const onToggleAuthType = () => {
    authType === "signUp" ? setAuthType("signIn") : setAuthType("signUp");
  };

  return (
    <Container>
      <Title>{authType === "signUp" ? "회원가입" : "로그인"}</Title>
      <AuthForm authType={authType} onToggleAuthType={onToggleAuthType} />
    </Container>
  );
};

export default SignUp;
