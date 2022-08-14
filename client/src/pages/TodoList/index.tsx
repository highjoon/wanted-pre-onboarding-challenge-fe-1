import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import TodoCard from "components/TodoCard";
import { tokenKey } from "constants/auth";
import useGetTodoList from "hooks/useGetTodoList";
import localStorage from "utils/localStorage";

const TodoList = () => {
  const { data, isLoading } = useGetTodoList();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getStorage(tokenKey);
    if (!token) navigate("/auth", { replace: true });
  }, [navigate]);

  if (isLoading) {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  return (
    <>
      {data?.map((todo) => (
        <TodoCard key={todo.id} id={todo.id} title={todo.title} content={todo.content} />
      ))}
    </>
  );
};

export default TodoList;
