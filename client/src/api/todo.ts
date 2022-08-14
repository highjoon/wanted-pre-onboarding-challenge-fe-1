import instance from "lib/axios";
import { ITodo } from "types/todo";

const todoAPI = {
  getTodos: async (): Promise<ITodo> => {
    const { data } = await instance.get("/todos");
    return data;
  },
  getTodoById: async (id: string): Promise<ITodo> => {
    const { data } = await instance.get(`/todos/${id}`);
    return data;
  },
  createTodo: async (title: string, content: string): Promise<ITodo> => {
    const { data } = await instance.post("/todos", { title, content });
    return data;
  },
  deleteTodo: async (id: string): Promise<null> => {
    const { data } = await instance.delete(`/todos/${id}`);
    return data;
  },
  updateTodo: async (id: string): Promise<ITodo> => {
    const { data } = await instance.put(`/todos/${id}`);
    return data;
  },
};

export default todoAPI;
