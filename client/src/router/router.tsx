import { Route, Routes } from "react-router-dom";
import SignUp from "pages/SignUp";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Router;
