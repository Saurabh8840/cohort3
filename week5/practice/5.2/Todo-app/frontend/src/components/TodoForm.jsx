function TodoForm(){
    
    return  <div className="min-h-screen bg-black text-white p-6">
    <div className="max-w-4xl mx-auto bg-black border border-gray-700 rounded-lg p-6 shadow-lg">
      <h1 className="text-3xl font-bold mb-2">WELCOME BACK</h1>
      <p className="text-lg mb-6">Here's a list of your tasks for this month!</p>
      
      {/* Task input section */}
      <div className="flex mb-4 gap-2">
        <input
          type="text"
        //   value={newTask}
        //   onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task title"
          className="flex-1 p-2 rounded border border-gray-600 bg-black text-white"/>
        <button 
        //   onClick={addTask}
          className="bg-black border-2 border-gray-600   hover:border-white hover:border-2 text-white px-4 py-2 rounded">
          Add Task
        </button>
        <button 
        //   onClick={() => setShowCompleted(!showCompleted)}
          className={`bg-black border-2 border-gray-600  hover:border-white hover:border-2 text-white px-4 py-2 rounded  'bg-gray-700' : ''}`}
        >
          Completed Task
        </button>
      </div>
      
      {/* Description input for new task */}
      <input
        type="text"
        // value={newDescription}
        // onChange={(e) => setNewDescription(e.target.value)}
        placeholder="Enter task description"
        className="w-full p-2 rounded border border-gray-600 bg-black text-white mb-6"
      />

    </div>
    </div>

}

export default TodoForm;
