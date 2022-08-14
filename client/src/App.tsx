import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { Global } from "@emotion/react";
import Router from "router/router";
import GlobalStyles from "styles/globalStyles";
import localStorage from "utils/localStorage";
import authMessage from "constants/authMessage";
import { tokenKey } from "constants/auth";
import { TOAST_ID } from "constants/toast";
import { tokenValidState } from "recoil/auth";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setIsTokenValid = useSetRecoilState<boolean>(tokenValidState);

  useEffect(() => {
    const token = localStorage.getStorage(tokenKey);
    if (token) {
      setIsTokenValid(true);
    } else {
      setIsTokenValid(false);
      if (location.pathname !== "/auth") toast.error(authMessage.SIGN_IN_REQUIRED, { toastId: TOAST_ID.TOKEN_ERROR });
      navigate("/auth", { replace: true });
    }
  }, [location.pathname, navigate, setIsTokenValid]);

  return (
    <div className="App">
      <Global styles={GlobalStyles} />
      <Router />
    </div>
  );
};

export default App;
