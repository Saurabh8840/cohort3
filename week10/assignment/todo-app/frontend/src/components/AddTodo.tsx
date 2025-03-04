import { useState } from "react";
import { addTodo } from "../api/todo";

// Define the type for a single Todo item
interface Todo {
  id: number;
  title: string;
}

// Define props type explicitly
interface AddTodoProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AddTodo: React.FC<AddTodoProps> = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const handleAddTodo = async () => {
    try {
      const res = await addTodo(title);
      setTodos((prev) => [...prev, res.data.data]); // Update todo list
      setTitle("");
    } catch (error) {
      alert("Failed to add todo");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
