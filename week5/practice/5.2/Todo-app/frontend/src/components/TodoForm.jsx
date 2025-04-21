import { useState } from "react";

function TodoForm({onAddTask,handleToggleCompleted}){
    const [newTask,setNewTask]=useState("");
    const [newDescription,setNewDescription]=useState("");

    const handleAddTask= async function(){
        if(!newTask || !newDescription){
            alert("Please enter both title and description");
            return;
        }

        const newTodo={
            title:newTask,
            description:newDescription
        }

        try {
            const res=await fetch("http://localhost:3000/todo",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newTodo),
            })

            if(res.ok){
                const savedTodo=await res.json();
                onAddTask(savedTodo);
                setNewTask("");
                setNewDescription("");

            }else{
                alert("Failed to add task");
            }
        } catch (error) {
            console.error("Error adding task:",error);
        }
    };

    return  <div >
    
      <h1 className="text-3xl font-bold mb-2">WELCOME BACK</h1>
      <p className="text-lg mb-6">Here's a list of your tasks for this month!</p>
      
      {/* Task input section */}
      <div  className="flex mb-4 gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e)=>setNewTask(e.target.value)}
          placeholder="Enter task title"
          className="flex-1 p-2 rounded border border-gray-600 bg-black text-white"
        />

        <button 
          onClick={handleAddTask}
          className="bg-black border-2 border-gray-600   hover:border-white hover:border-2 text-white px-4 py-2 rounded">
          Add Task
        </button>
        <button 
          onClick={handleToggleCompleted}
          className={`bg-black border-2 border-gray-600  hover:border-white hover:border-2 text-white px-4 py-2 rounded  'bg-gray-700' : ''}`}
        >
          {/* {`Show ${showCompleted ? "All" : "Completed"} Tasks`} */}
          Completed
        </button>
      </div>
      
      {/* Description input for new task */}
      <input
        type="text"
        value={newDescription}
        onChange={(e)=>setNewDescription(e.target.value)}
        placeholder="Enter task description"
        className="w-full p-2 rounded border border-gray-600 bg-black text-white mb-6"
      />


    </div>

}

export default TodoForm;
