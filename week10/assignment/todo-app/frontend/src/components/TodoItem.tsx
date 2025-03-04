interface Todo {
    id: number;
    title: string;
  }
  
  interface TodoItemProps {
    todo: Todo;
  }
  
  const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    return <div>{todo.title}</div>;
  };
  
  export default TodoItem;
  