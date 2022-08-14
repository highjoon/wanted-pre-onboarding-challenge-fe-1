import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { HeaderWrapper, ButtonContainer } from "./styles";
import { Button } from "@mui/material";
import { tokenValidState } from "recoil/auth";

const Header = () => {
  const navigate = useNavigate();
  const [isTokenValid, setIsTokenValid] = useRecoilState<boolean>(tokenValidState);

  const onClickSignOut = () => {
    localStorage.removeItem("authToken");
    setIsTokenValid(false);
    navigate("/auth");
  };

  return (
    <HeaderWrapper>
      <ButtonContainer>
        {isTokenValid && (
          <Button variant="text" onClick={onClickSignOut}>
            로그아웃
          </Button>
        )}
      </ButtonContainer>
    </HeaderWrapper>
  );
};

export default Header;
