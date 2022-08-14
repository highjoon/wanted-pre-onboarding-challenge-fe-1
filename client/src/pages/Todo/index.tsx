import { Box, CircularProgress } from "@mui/material";
import TodoCard from "components/TodoCard";
import useGetTodoList from "hooks/useGetTodoList";

const Todo = () => {
  const { data, isLoading } = useGetTodoList();

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

export default Todo;
