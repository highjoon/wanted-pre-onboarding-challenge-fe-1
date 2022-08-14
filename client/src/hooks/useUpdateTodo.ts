import { useMutation, UseMutationResult } from "react-query";
import { ITodo } from "types/todo";
import todoAPI from "api/todo";

const useUpdateTodo = (id: string): UseMutationResult<ITodo> => {
  return useMutation(() => todoAPI.updateTodo(id));
};

export default useUpdateTodo;
