import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { HeaderWrapper, ButtonContainer } from "components/Header/styles";
import { Button } from "@mui/material";
import { tokenValidState } from "recoil/auth";
import localStorage from "utils/localStorage";
import { tokenKey } from "constants/auth";
import { modalState } from "recoil/todo";

const Header = () => {
  const navigate = useNavigate();
  const [isTokenValid, setIsTokenValid] = useRecoilState<boolean>(tokenValidState);
  const setIsModalOpen = useSetRecoilState(modalState);

  const onToggleOpenModal = () => {
    setIsModalOpen(true);
  };

  const onClickSignOut = () => {
    localStorage.removeStorage(tokenKey);
    setIsTokenValid(false);
    navigate("/auth");
  };

  return (
    <HeaderWrapper>
      {isTokenValid && (
        <ButtonContainer>
          <Button variant="text" onClick={onToggleOpenModal}>
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
