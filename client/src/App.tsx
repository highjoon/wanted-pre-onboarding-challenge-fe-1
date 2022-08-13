import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Global } from "@emotion/react";
import Router from "router/router";
import GlobalStyles from "styles/globalStyles";
import localStorage from "utils/localStorage";
import authMessage from "constants/authMessage";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getLocalStorage("authToken");

    if (!token) {
      toast.error(authMessage.SIGN_IN_REQUIRED, { toastId: "tokenError" });
      navigate("/auth", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="App">
      <Global styles={GlobalStyles} />
      <Router />
    </div>
  );
};

export default App;
