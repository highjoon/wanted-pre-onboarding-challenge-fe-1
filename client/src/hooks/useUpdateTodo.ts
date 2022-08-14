import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import todoAPI from "api/todo";
import { IUpdateTodo, ITodo } from "types/todo";

const useUpdateTodo = () => {
  return useMutation<{ data: ITodo }, AxiosError, IUpdateTodo>(
    "updateTodo",
    ({ id, title, content }) => todoAPI.updateTodo(id, title, content),
    {
      onSuccess: ({ data }) => {
        const { title } = data;
        toast.success(`${title} 업데이트 완료`);
      },
    }
  );
};

export default useUpdateTodo;
