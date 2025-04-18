import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {

//   const data=[];

//   const divArray=data.map((i,index)=>(<div key={index}>{i}</div>))

//   return (
//     <div>
//        {divArray}
//     </div>
      
//   )
// }
function App() {
  const [divArray, setDivArray] = useState([]);
  const [title ,setTitle]=useState("");
  const [description,setDescription]=useState("");

  const addDiv = () => {

    // const newdiv=divArray.map((i,index)=>(<div key={index}>{i}</div>))

    const newdiv=<div key={divArray.length}> 
    TODO-{divArray.length+1} <br />
    Title:{title} <br /> 
    description: {description} 
    </div>
    
    setDivArray([...divArray,newdiv]);
    setTitle("");
    setDescription("");
  };

  return (
    <div>

      <h2>Add a Todo</h2>

      <input 
      type="text"
      placeholder='Enter Title'
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      
      />
      <br />
      <input 
      type="text"
       placeholder='Enter description'
       value={description}
       onChange={(e)=>setDescription(e.target.value)}
        />
      <br />
      <br />
      <button onClick={addDiv}>Add Div</button>
      {divArray}
      
      
    </div>
  );
}





export default App
