import { useQuery, UseQueryResult } from "react-query";
import { ITodo } from "types/todo";
import todoAPI from "api/todo";

const useGetTodoList = (): UseQueryResult<ITodo[]> => {
  return useQuery("todos", async () => {
    const { data } = await todoAPI.getTodoList();
    return data;
  });
};

export default useGetTodoList;
