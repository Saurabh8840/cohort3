import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const signup = async (email: string, password: string) => {
  return axios.post(`${API_URL}/signup`, { email, password });
};

export const login = async (email: string, password: string) => {
  return axios.post(`${API_URL}/login`, { email, password });
};
