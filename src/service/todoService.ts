import axios from "axios";
import type { Todo } from "../hooks/useTodo";

const API_URL = "http://localhost:3333/todos";

export const todoService = {
  async getTodos(): Promise<Todo[]> {
    const res = await axios.get(API_URL);
    return res.data;
  },
  async addTodo(title: string, description: string): Promise<Todo> {
    const res = await axios.post(API_URL, { title, description });
    return res.data;
  },
  async updateTodo(id: string, data: { title?: string; description?: string }): Promise<Todo> {
    const res = await axios.patch(`${API_URL}/${id}`, { id, ...data });
    return res.data;
  },
  async toggleTodo(id: string, completed: boolean): Promise<Todo> {
    const res = await axios.patch(`${API_URL}/${id}`, { id, completed });
    return res.data;
  },
  async deleteTodo(id: string): Promise<void> {
    await axios.delete(`${API_URL}/${id}`, { data: { id } });
  },
};
