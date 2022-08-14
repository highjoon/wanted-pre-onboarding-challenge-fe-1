import { Navigate, Route, Routes } from "react-router-dom";
import { SignUp, TodoList } from "pages";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/todo"} />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path={"/todo"} element={<TodoList />}>
          <Route path=":id" element={<TodoList />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
