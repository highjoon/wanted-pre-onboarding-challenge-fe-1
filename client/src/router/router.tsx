import { Route, Routes } from "react-router-dom";
import { SignUp, ToDo } from "pages";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<SignUp />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </>
  );
};

export default Router;
