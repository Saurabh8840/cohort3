// import { useState } from 'react'



// function App() {
//   const [count, setCount] = useState(0)




//   return (
//     <div>
//           <Counter count={count} setCount={setCount} />
//           <Counter count={count} setCount={setCount} />
//           <Counter count={count} setCount={setCount} />
//           <Counter count={count} setCount={setCount} />
//           Count :{count}
//     </div>
//   )


//   function Counter(props){

//     function handleIncrement(){
//       return props.setCount(props.count+1)
//     }
//     function handleDecrement(){
//       return props.setCount(props.count+1)
//     }
//     return <div>
//       <h1>Counter :{props.count}</h1>
//       <button onClick={handleIncrement} >Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>

//     </div>
//   }
// }

// export default App

// import React, { useState } from "react"
// import { MemoizeComponent } from "./components/memoizeComponent.jsx"

// const TodoList=({todo})=>{
   

//    return <div>
//     <ul>
//     {todo.map(todos=>
//       <li key={todos.id}>{todos.text}</li>
//     )}
//    </ul>
//    </div>
// }
 


// const App=()=>{
   
//   const [inputvalue,setinputvalue]=useState(5); 

//   const [todo,setTodo]=useState([
//     {id:1,text:'Learn React'},
//     {id:2,text:'read react'},
//     {id:3,text:'update react'},
//   ])

  
//   const addTodo=()=>{
//     const newTodo={id:todo.length+1 ,text:"jldi add kro"}
//     setTodo([...todo , newTodo])
//   }

//   return <div>
//     <h2>TodoList</h2>
//     <button onClick={addTodo}>Add Todo</button>
//     <TodoList todo={todo}/>

//     <br />
//     <br />

//     <input type="number" value={inputvalue} onChange={(e)=>setinputvalue(Number(e.target.value))} />
//     <MemoizeComponent value={inputvalue} />


//   </div>
// }


// export  default App


import React, { useState } from "react";
import { MemoizeComponent } from "./components/memoizeComponent";

const App=()=>{


  const [inputvalue,setValue]=useState(5);

  return <div>
    <input type="number" value={inputvalue} onChange={(e)=>{setValue(e.target.value)}} />
    <MemoizeComponent value={inputvalue} />
  </div>
}

export default App