import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import todoAPI from "api/todo";

const useDeleteTodo = () => {
  return useMutation<{ data: null }, AxiosError, { id: string }>(({ id }) => todoAPI.deleteTodo(id), {
    onSuccess: () => {
      toast.success("성공적으로 삭제되었습니다.");
    },
  });
};

export default useDeleteTodo;
