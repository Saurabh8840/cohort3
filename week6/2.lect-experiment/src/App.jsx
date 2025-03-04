


///bhai mujhe lagta h ye assignment h aur ise apko khud smjhna hai okk



// import { useState, useEffect } from 'react';
// import axios from "axios";
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);

//   // useEffect for fetching todos
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos")
//   .then(response => {
//     // JSONPlaceholder has a different structure
//     const mockTodos = response.data.map(todo => ({
//       id: todo.id,
//       title: todo.title,
//       description: "Mock Description", // Placeholder for missing data
//     }));
//     setTodos(mockTodos);
//   })
//   .catch(error => {
//     console.error("Error fetching todos:", error.message);
//   });

//   }, []); // Empty dependency array ensures it runs only once

//   return (
//     <>
//       {todos.map(todo => 
//         <Todo 
//           key={todo.id} // Ensure a unique key for each item
//           title={todo.title} 
//           description={todo.description} 
//         />
//       )}
//     </>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default App;




//-------------------------------------------------------------------------------------------------------------------
//task:1
//write a component that takes a todo as input and fetches the data 
// for that todo from the given end point and then renders it 
// how would the dependency array change?
//actually yha pe jo api fetch kr rah h usme prblm hai thik h


// import { useState, useEffect } from "react";
// import React from "react";
// import axios from "axios";

// function App() {


  
//   return (
//     <div>
//       <Todo id={2} /> {/* Example ID, you can change this */}
//     </div>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState(null);  // Initially null
//   const [loading, setLoading] = useState(true);  // For loading state

//   useEffect(() => {
//     // Correct API endpoint
//     axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
//       .then((response) => {
//         setTodo(response.data);  // Update state with fetched data
//         setLoading(false);  // Stop loading
//       })
//       .catch((error) => {
//         console.error("Error fetching todo:", error);
//         setLoading(false);  // Stop loading on error
//       });
//   }, [id]);  // Empty dependency array means it runs once when component mounts

//   if (loading) {
//     return <p>Loading...</p>;  // Show loading while data is being fetched
//   }

//   if (!todo) {
//     return <p>No data found!</p>;  // If no todo data is found
//   }

//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h4>{todo.description}</h4>
//     </div>
//   );
// }

// export default App;


//---------------------------------------------------------------------------------------------------------------
//button add krr rhe hai 
//aur based on that vo page open hoga



// import { useState, useEffect } from "react";
// import React from "react";
// import axios from "axios";

// function App() {
//   const [selectedId,setSelectedId]=useState(1);



//   return (
//     <div >

//       <button onClick={function(){setSelectedId(1);}}>1</button>
//       <button onClick={function(){setSelectedId(2);}}>2</button>
//       <button onClick={function(){setSelectedId(3);}}>3</button>
//       <button onClick={function(){setSelectedId(4);}}>4</button>
//       <Todo id={selectedId} /> {/* Example ID, you can change this */}
//     </div>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState(null);  // Initially null
//   const [loading, setLoading] = useState(true);  // For loading state

//   useEffect(() => {
//     // Correct API endpoint
//     axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
//       .then((response) => {
//         setTodo(response.data);  // Update state with fetched data
//         setLoading(false);  // Stop loading
//       })
//       .catch((error) => {
//         console.error("Error fetching todo:", error);
//         setLoading(false);  // Stop loading on error
//       });
//   }, [id]);  // Empty dependency array means it runs once when component mounts

//   if (loading) {
//     return <p>Loading...</p>;  // Show loading while data is being fetched
//   }

//   if (!todo) {
//     return <p>No data found!</p>;  // If no todo data is found
//   }

//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h4>{todo.description}</h4>
//     </div>
//   );
// }

// export default App;


//---------------------------------------------------------------------------------------
//useMemo

//let say you are the driver and you want to check  how much petrol  left would u do that  in every lap??
//or you do that after ever 10 lap?


//if i ask you to create an app that does two thing -
//increases a counter by 1
//lets user put a value in an input box (n) and you need to show  sum from 1-n


// import { useState, useEffect, useMemo } from "react";
// import React from "react";


// function App() {
//   const [counter,setcount]=useState(0);
//   const [InputValue,setInputValue]=useState(1);

    
//   function inc(){
//      setcount(counter+1)
//   }
//   //use of memo

//   let count=useMemo(()=>{
//     let sum=0;
//   for(let i=0;i<=InputValue;i++){
//     sum=sum+i;
//   }
//   return sum;
//   },[InputValue])

//   return (
//     <div >
//         <input type="text" onChange={function (e) {
//           setInputValue(e.target.value);
//         } } placeholder={"find sum from 1 to n" } />
//         <br />
//         sum from 1 to {InputValue} is {count}
//         <br />
//          <button onClick={{inc}} > counter {counter}</button>

//     </div>
//   );
// }

// export default App;



//------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------


// chalo bahi shuru karte hai week 6.2 ke revision with notes


// isem me ham these 3 ko master karenge okk

// 1.useEffect
// 2.useMemo
// 3.useCallback


//use state ke uses?
//1.data manage 
// 2. form ka data sambhalna,
// 3.data fetch krna ,
// 4.array object sambhalna 
//useState wahi use hota hai jahaan tumhe kisi cheez ka data
//ya state ko manage karke dikhana ho use karna ho 
//React ka kaam hai UI aur data ko sync rakhna. Agar tumhari
// app me koi aisi cheez hai jo change ho sakti hai 
// (dynamic), uska state rakhna padta hai. 
// Aur usi kaam ke liye useState use hota hai.

// What Are Side Effects?
// In React, side effects are actions that go beyond 
// just updating the UI. Imagine you're building a web
//  app where you need to:

// Fetch data from an API 🛰️
// Subscribe to real-time updates 📡
// Update the DOM manually ✍️
// Start or clean up timers 🕒
// All these tasks affect things outside React’s rendering flow, so we call them side effects.


// Handling Side Effects in React (The Hero: useEffect)
// React gives us the useEffect hook to handle these side
//  effects in functional components. It’s like telling
//   React:
// "Hey, after you’re done painting the screen, run this 
// extra task for me!"
 


//useEffect:---

// example to use useState:

// import React from "react";
// import { useState } from "react";

// function App(){

//    const [count ,setCount]=useState(0);

//    return <div>

//     <button onClick={function(){setCount(c=>c+1);}}>Counter {count}</button>
//    </div>
// }

// // function Counter({count}){

// //   return <div>
// //     {count}
// //   </div>
// // }

// export default App;


//useEffect();

//used for performing side effect in functional components 
//it is often used for tasks such as 
// data fetching ,
// subscriptions,
// or maually changing the dom 

// example
//ham data fetch kr rhe hai thik h





// import React from "react";
// import { useState,useEffect } from "react";

// function App(){

//   const [todo,setTodo]=useState([]);
//   // these two useState hooks help manage the loading state
//   //  and handle errors during the data fetching process.
//   const [loading ,setLoading]=useState(true);//initially set it to true because we assume the data is loading when the component first renders.
//   const [error ,setError]=useState(null);//We initialize it with null, meaning no error by default.

  

//   //useEffect

//   useEffect( ()=> {
//     const fetchData=async()=>{
//       try {
//         const response =await fetch("https://jsonplaceholder.typicode.com/todos");
//         const data=await response.json();
//         setTodo(data);
//         setLoading(false);
//       }catch(error){
//         setError("Failed to fetch data ");
//         setLoading(false);
//       }
//     };
//     fetchData();
//     // setTodo([
//     //   { title: "Learn React", description: "Understand useState and useEffect" },
//     //   { title: "Complete Project", description: "Finish building the app" }
//     // ]);
    
//     //fetch krte hai chaloo



//   },[]);

//   if(loading){
//     return <div>loading</div>
//   }
//   if(error){
//     return <div>{error}</div>
//   }




//   return <div>
//     <h1>Todo List</h1>
//     {todo.map(  (items,id)=>( <Todo key={id} title={items.title} description={items.description}></Todo>

//     ))}
//   </div>
// }

// function Todo({title,description}){

//   return <div>
//     <h1>{title}</h1>
//     <h2>{description}</h2>
//   </div>
// }

// export default App;



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//useMemo yha padhenge 



//ek example lete hai 


// import React from "react";
// import { useState,useMemo } from "react";

// function App(){
//   const [count ,setCount]=useState(0);
//   const [inputValue,setInputValue]=useState(1);


//   let sums= useMemo(()=>{
//     let sum=0;
//   for(let i=1;i<=inputValue;i++){
//     sum=sum+i;
//   }
//   return sum;

//   },[inputValue])
  



//   return <div>
//     <input  onChange={function (e) {
//       setInputValue(e.target.value);
      
//     }} placeholder={"find sum form 1 to n"} />
//     <br />
//      Sum from 1 to {inputValue} is {sums}
//      <br />
//     <button onClick={function (){setCount(c=>c+1)}}>counter {count}</button>
//   </div>
// }





// export default App;


//use memo ki help se re-rendering se bach gye mere dost baki aur khud se padhna yrr

//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------

//abb ham useCallback():
//             ke bare me padhnege okk..

// useCallback ek react hook hai jo functions ko yaad rakhne 
// me madd karta hai .iska kaam hai ek hi function baar -baar na 
// na banana jab tak zarurat na ho . ye tab kam aata hai jab aap ek function 
// ko child component ko prop ke roop me bhejte ho aur chahte ho ki 
// unnecessary re render na hoo.

//imp: 
  //re-render rokta hai 
  //preformance improve karta hai 


// without usecallback fucntion 
// import React, { useState } from "react";

// function Parent() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   console.log("Parent re-rendered!");

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <Child increment={increment} />
//     </div>
//   );
// }

// function Child({ increment }) {
//   console.log("Child re-rendered!");
//   return <button onClick={increment}>Increment</button>;
// }

// export default Parent;


///kahani padhte hai:-

// Code Flow Kya Hai?
// 1.Pehla Render:

// Parent render hota hai, count initialize hota hai 0 se.
// Parent me ek increment function banta hai jo setCount ko call karta hai.
// Parent Child ko render karne ke liye increment pass karta hai.
// Console me print hoga

//2. Button click (child ka button):


// Jab button click hota hai, increment function call hota hai.
// setCount(count + 1) state ko update karta hai (count ab 1 ban jata hai).
// State change hone ki wajah se Parent re-render hota hai.
// Re-render hone par:
// Ek naya increment function banta hai.
// React ko lagta hai Child ke increment prop me change hua hai (kyunki function ka reference naya hai).
// Is wajah se Child unnecessarily re-render hota hai.


// Problem Kya Hai? aur callback kyu use krna hai
// Har baar Parent ka increment function naya ban raha hai.
// React sochta hai ki Child ka increment prop badal gaya hai (kyunki reference alag hai), is wajah se Child ka bhi re-render ho raha hai.
// Agar Child me bohot saara complex code ya calculations ho, to performance slow ho sakti hai.


//abb ise kaise roke chloo

import React,{useState,useCallback,useMemo} from "react";


function Parent(){
  const [count,setCount]=useState(0);
  
  const increment =useCallback(()=>{
    setCount(count+1);
  },[count]);
  // function increment(){
  //   setCount(count+1);
  // }
  return <div>
    <Child increment={increment}></Child>
  </div>
}
const Child=React.memo(({increment})=>{
  console.log("Child re-rendered!");
 return <div>
  <button onClick={increment}>increment </button>
 </div>
});


export default Parent;