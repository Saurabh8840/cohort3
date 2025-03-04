import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

export const fetchTodos = async () => {
  return axios.get(`${API_URL}`);
};

export const addTodo = async (title: string) => {
  return axios.post(`${API_URL}`, { title });
};
