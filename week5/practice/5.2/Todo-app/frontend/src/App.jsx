import { useEffect,useState } from "react";

import TodoForm from "./components/TodoForm"
import TodoTable from "./components/TodoTable"


function App() {
  const [tasks,setTasks]=useState([]);
  const [showCompleted,setShowCompleted]=useState(false);

  //fucntion to fetch data from backend
  const fetchTasks=async function(){
    const res=await fetch("http://localhost:3000/todos");
    const data=await res.json();
    setTasks(data.todos);
  };

  const fetchCompletedTasks=async ()=>{
    const res=await fetch("http://localhost:3000/todos/completed");
    const data=await res.json();
    setTasks(data.todos);
  }

  const toggleComplete = async (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  
    await fetch("http://localhost:3000/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  
    if (showCompleted) {
      fetchCompletedTasks();
    } else {
      fetchTasks();
    }
  };

  const handleToggleCompleted = () => {
    setShowCompleted((prev) => !prev);
    if (showCompleted) {
      fetchTasks(); // Fetch all tasks if 'Show Completed' is disabled
    } else {
      fetchCompletedTasks(); // Fetch only completed tasks
    }
  };


  
  

  
  const handleAddTask=function(savedTodo){
    console.log("Saved todo:", savedTodo);
    setTasks((prev) => [savedTodo, ...prev]);

  };

  //toggle showing completed tasks
  // const handleToggleCompleted=()=>{
  //   setShowCompleted((prev)=>!prev);
  //   showCompleted ? fetchCompletedTasks():fetchTasks();
  // };

  useEffect(()=>{
    fetchTasks();
  },[]);

  

  return (<div className="min-h-screen bg-black text-white p-6">
    <div className="max-w-4xl mx-auto bg-black border border-gray-700 rounded-lg p-6 shadow-lg">
    <TodoForm onAddTask={handleAddTask} handleToggleCompleted={handleToggleCompleted} />
    <TodoTable tasks={tasks} toggleComplete={toggleComplete} />
    </div>
  </div>
    
      
    
  )
}

export default App
