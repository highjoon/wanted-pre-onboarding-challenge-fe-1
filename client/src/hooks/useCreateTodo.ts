import { useMutation, UseMutationResult } from "react-query";
import { ITodo } from "types/todo";
import todoAPI from "api/todo";

const useCreateTodo = (title: string, content: string): UseMutationResult<ITodo> => {
  return useMutation(() => todoAPI.createTodo(title, content));
};

export default useCreateTodo;
