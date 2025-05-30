import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodo } from './components/CreateTodo'

function App() {
  const [todos,setTodos]= useState([]);
  
  fetch("https://localhost:3000/todos").then(async function(res){
    const json =await res.json();
    setTodos(json.todos);
  })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {
          title:"asd",
          description:"asdasd",
          completed:false
        }
      ]}></Todos>
    </div>
      
  )
}

export default App
