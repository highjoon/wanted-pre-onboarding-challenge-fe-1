import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { HeaderWrapper, ButtonContainer } from "./styles";
import { Button } from "@mui/material";
import { tokenValidState } from "recoil/auth";
import localStorage from "utils/localStorage";
import { tokenKey } from "constants/auth";

const Header = () => {
  const navigate = useNavigate();
  const [isTokenValid, setIsTokenValid] = useRecoilState<boolean>(tokenValidState);

  const onClickCreateTodo = () => {};

  const onClickSignOut = () => {
    localStorage.removeStorage(tokenKey);
    setIsTokenValid(false);
    navigate("/auth");
  };

  return (
    <HeaderWrapper>
      {isTokenValid && (
        <ButtonContainer>
          <Button variant="text" onClick={onClickCreateTodo}>
            추가
          </Button>
          <Button variant="text" onClick={onClickSignOut}>
            로그아웃
          </Button>
        </ButtonContainer>
      )}
    </HeaderWrapper>
  );
};

export default Header;
