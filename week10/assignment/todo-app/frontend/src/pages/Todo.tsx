import { useEffect, useState } from "react";
import { fetchTodos } from "../api/todo";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";

// Define a type for Todo
interface Todo {
  id: number;
  title: string;
}

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // ✅ Add type here

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await fetchTodos();
        setTodos(res.data.data); // Ensure res.data.data matches Todo[]
      } catch (error) {
        alert("Failed to fetch todos");
      }
    };
    getTodos();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodo setTodos={setTodos} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todo;
