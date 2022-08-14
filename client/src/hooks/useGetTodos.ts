import { useQuery, UseQueryResult } from "react-query";
import { ITodo } from "types/todo";
import todoAPI from "api/todo";

const useGetTodos = (): UseQueryResult<ITodo> => {
  return useQuery("todos", async () => {
    const { data }: ITodo = await todoAPI.getTodos();
    return data;
  });
};

export default useGetTodos;
