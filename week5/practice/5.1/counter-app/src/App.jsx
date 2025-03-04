
// state ,components
import {useState} from "react";


// function App() {
//   const [count,setCount]=useState(0); 

//   function onclickHandler(){
//     setCount(count+1);
//   }
//   return (
//     <div>
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//     </div>
//   )
// }


// function CustomButton(props){

//   function onclickHandler(){
//     props.setCount(props.count+1);
//   }

//   return <button onClick={onclickHandler}>
//     Counter {props.count}
//   </button>
// }  




//TODO APPLICATION


//TODO
// {
//   TODOS: [{TITLE:"TODO1",description:"first todo",completed:false,}]
// }

function App(){
  const [todos,setTodos]=useState([{
    title:"go to gym",
    description:"go to gym from 7-9",
    completed:false
  },{
    title:"study dsa",
    description:"study dsa from 9-100",
  }]);
}
export default App
