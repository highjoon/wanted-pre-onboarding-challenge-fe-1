import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import todoAPI from "api/todo";
import { INewTodo, ITodo } from "types/todo";

const useCreateTodo = () => {
  return useMutation<{ data: ITodo }, AxiosError, INewTodo>(
    "newTodo",
    ({ title, content }) => todoAPI.createTodo(title, content),
    {
      onSuccess: ({ data }) => {
        const { title } = data;
        toast.success(`${title} 생성 완료되었습니다.`);
      },
    }
  );
};

export default useCreateTodo;
