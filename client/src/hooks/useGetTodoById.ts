import { useQuery, UseQueryResult } from "react-query";
import { ITodo } from "types/todo";
import todoAPI from "api/todo";

const useGetTodoById = (id: string): UseQueryResult<ITodo> => {
  return useQuery(`todo${id}`, async () => {
    const { data }: ITodo = await todoAPI.getTodos();
    return data;
  });
};

export default useGetTodoById;
