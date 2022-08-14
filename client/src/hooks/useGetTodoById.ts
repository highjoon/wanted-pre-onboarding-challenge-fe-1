import { useQuery } from "react-query";
import { ITodo } from "types/todo";
import todoAPI from "api/todo";
import { AxiosError } from "axios";

const useGetTodoById = (id: string) => {
  return useQuery<{ data: ITodo }, AxiosError>(["todo", id], () => todoAPI.getTodoById(id));
};

export default useGetTodoById;
