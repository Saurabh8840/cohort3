function TodoTable() {
    return (
        <div className="overflow-hidden border border-gray-700 rounded-lg">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr className="text-left">
              <th className="p-4 w-1/2 font-bold text-lg">Title</th>
              <th className="p-4 w-1/2 font-bold text-lg">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {/* {filteredTasks.map(task => ( */}
              <tr className="hover:bg-gray-900">
                <td className="p-4 flex items-center">
                  <input 
                    type="checkbox" 
                    // checked={task.completed}
                    // onChange={() => toggleComplete(task.id)}
                    className="mr-3 h-5 w-5"
                  />
                  <span className={ "line-through text-gray-500" }>
                    
                  </span> 
                </td>
                <td className={`p-4 "line-through text-gray-500" : ""}`}>
                  {/* {task.description} */}
                </td>
              </tr>
          
            {/* {filteredTasks.length === 0 && ( */}
              <tr>
                <td colSpan="2" className="p-4 text-center text-gray-500">
                  {/* { "No completed tasks" : "No tasks available"} */}
                </td>
              </tr>
            {/* )} */}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default TodoTable;
  