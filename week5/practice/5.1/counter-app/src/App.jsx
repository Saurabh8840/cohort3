
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

// function App(){
//   const [todos,setTodos]=useState([{
//     title:"go to gym",
//     description:"go to gym from 7-9",
//     completed:false
//   },{
//     title:"study dsa",
//     description:"study dsa from 9-100",
//   }]);
// }
// export default App







//----------------------------------------------------------------------------------
//revision me banaya gya 




//counter app

// function App(){

//   return(
//     <Counter/>
//   )
// }

// function Counter(){

//   const [count,SetCount]=useState(0);

//   function IncrementCount(){
//     SetCount(count+1);

//   }
//   function DecrementCount(){
//     SetCount(count-1);

//   }
  
//   return(
//     <div>
//     <h1>Counter : {count}</h1><br />
//     <button onClick={IncrementCount}>Increment Count</button>
//     <button onClick={DecrementCount}>Decrement Count</button>

//     </div>
//   )
// }

// export default App;

//---------------------------------------------------------------

//counter -app using props 


function App(){

  const [count,Setcount]=useState(0);

  
  
  return(
    <div>
      <Counter count={count} Setcount={Setcount} />
      <Counter count={count} Setcount={Setcount} />
      <Counter count={count} Setcount={Setcount} />
      <Counter count={count} Setcount={Setcount} />
      <Counter count={count} Setcount={Setcount} />
    </div>
  )

}

function Counter(props){

  function increment(){
    props.Setcount(props.count+1);
  }
  function decrement(){
    props.Setcount(props.count-1);
  }
    
  return(
    <div>
      <h1>Counter : {props.count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
    

  )
}

export default App;


