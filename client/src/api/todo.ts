import instance from "lib/axios";
import { ITodo } from "types/todo";

const todoAPI = {
  getTodoList: async (): Promise<{ data: ITodo[] }> => {
    const { data } = await instance.get("/todos");
    return data;
  },
  getTodoById: async (id: string): Promise<{ data: ITodo }> => {
    const { data } = await instance.get(`/todos/${id}`);
    return data;
  },
  createTodo: async (title: string, content: string): Promise<{ data: ITodo }> => {
    const { data } = await instance.post("/todos", { title, content });
    return data;
  },
  deleteTodo: async (id: string): Promise<{ data: null }> => {
    const { data } = await instance.delete(`/todos/${id}`);
    return data;
  },
  updateTodo: async (id: string, title: string, content: string): Promise<{ data: ITodo }> => {
    const { data } = await instance.put(`/todos/${id}`, { title, content });
    return data;
  },
};

export default todoAPI;
