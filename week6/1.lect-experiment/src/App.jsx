


//use this documentation 
//https://app.100xdevs.com/courses/1/149/164

// import { useState } from 'react'
// import React from 'react';

// function App() {
//   const [title,setTitle]=useState(" my name is saurabh");
  
//   function updateTitle(){
//     setTitle("my name is "+Math.random());
//   }
//   return (
    
//      <>
//      <button onClick={updateTitle}>update the title</button>
//       <Header title={title} />
//       <Header title="my name is harkirat"/>
      
//      </>
//   )
// }


// function Header({title}){
//   return <div>
    
//     {title}
//   </div>
// }

// export default App


//------------------------------------------------------------------------------------------------
//khudse likhna acchi baat hai


// import { useState } from 'react';
// import React from 'react';

// function App(){
//   const [title,setTitle]=useState("my name is saurabh");
//   const [titlee,settitlee]=useState("my name is annu tripathi")
//   function updatetitle(){
//     setTitle("my name is "+ Math.random());

//   }
//   function updatetitlee(){
//     settitlee("my name is annu "+Math.random());
//   }
//   return(
//    <div>
//      <button onClick={updatetitle}>update the title</button>
//      <button onClick={updatetitlee}>update 2</button>
//      <Header title={title}></Header>
//      <Header title={titlee}></Header>
//      <Header title="my name is annu"></Header>
//      <Header title="my name is annu1"></Header>
//      <Header title="my name is annu2"></Header>
//      <Header title="my name is annu2"></Header>
//     </div>
//   )
  
// }

// function Header({title}){
//   console.log("rendered")
//   return <div>
//      {title}
//     </div>
  
// }

// export default App;


//------------------------------------------------------------------------------------------------------------------------------
//yha pe hamne ye krne ki kosis ki hai ki ham baar baar render naa ho balki 
//minimum time render ho so uske liye hamne use state ko
//alag se define kiya hai jo ki header with button me hai 

// import { useState } from 'react'
// import React from 'react';

// function App() {
  
//   return (
    
//      <div>
//       <HeaderwithButton />
//       <Header title="my name is harkirat"/>
//       <Header title="my name is harkirat"/>
      
//      </div>
//   )
// }

// function HeaderwithButton(){
//     const [title,setTitle]=useState("my name is saurabh");
     
//     function updateTitle(){
//       setTitle("my name is saurabh "+Math.random());
//     }
//     return<div>
//         <button onClick={updateTitle}>update the title</button>
//         <Header title={title}/>
//       </div>
    
// }


// function Header({title}){
//   return <div>
    
//     {title}
//   </div>
// }

// export default App;



//------------------------------------------------------------------------------------------------------------------------
//second method to minimize re rendering okk
//abb ham phirse rendering ko minimize krne ke liye dusra method 
// using react.memo does
//memo let you skip re rendering when its props are unchanged
//syntax dekhte hai


// import { useState } from 'react'
// import React from 'react';

// function App() {
//   const [title,setTitle]=useState(" my name is saurabh");
  
//   function updateTitle(){
//     setTitle("my name is "+Math.random());
//   }
//   return (
    
//      <>
//        <button onClick={updateTitle}>update the title</button>
//       <Header title={title} />
//       <Header title="my name is harkirat"/>
//       <Header title="my name is harkirat"/>
//       <Header title="my name is harkirat"/>
//       <Header title="my name is harkirat"/>
      
//      </>
//   )
// }

// //memo 
// //const  Header=React.memo(....function)
// const  Header=React.memo(
//   function Header({title}){
//     return <div>
      
//       {title}
//     </div>
//   }
// )

// //or

// // const  Header=React.memo(function({title}){
// //   return <div>
    
// //     {title}
// //   </div>
// // })

// export default App


//-------------------------------------------------------------------------------------------------------
//abb ham ek todo app banayenge jisme we have following things
//

// Let's create a simple todo app that renders 3 todos:

// 1. Create a Todo component that accepts title, description as input.


// 2. Initialize a state array that has 3 todos.


// 3. Iterate over the array to render all the TODOS.


// 4. A button in the top-level App component to add a new TODO.

// import { useState } from 'react'
// import React from 'react';

// let counter=4;

// function App() {
//   const [todos,setTodos]=useState([{
//     id:1,
//     title:"go to gym",
//     description:"go to gym today"
//   },
//   {
//     id:2,
//     title:"go to drink water",
//     description:"go to gym today"
//   },
//   {
//     id:3,
//     title:"i am fucking rich ",
//     description:"$2000 month baby"
//   }])

  
//   function addTodo(){

//     setTodos([...todos,{
//       id:counter++,
//       title:Math.random(),
//       description:Math.random()
//     }])

//     //or

//     // const newTodos=[];
//     // for(let i=0;i<todos.length;i++){
//     //   newTodos.push(todos[i]);
//     // }
//     // //newtodos==todos
//     // newTodos.push({
//     //   id:4,
//     //   title:Math.random(),
//     //   description:Math.random()

//     // })
//   }


//   return (
//     <div>
//       <button onClick={addTodo}>add a todo</button>
//       {/* key here in help to track id in rendering which help react to 
//           understand the id's which not cause mesh up re rendering 
//           it tells react the ordering 
//           and if there is state change it let react to know 
//           that this changes with the code okk */}
//       {todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}


//        {/* //or  */}
//         {/* 
//        {todos.map(function(todo){
//         return <Todo title={todo.title} description={todo.description} />
//       })
//       }   */}



//     </div>
     
      
     
//   )
// }

// function Todo({title,description}){
//     return(
//       <div>
//         <h1>{title},</h1>
//         <h5> {description}</h5>
//       </div>
//     )
// }



// export default App;

//--------------------------------------------------------------------------------------------------------------------
//wrapper components
//which means a component take another component as input 
//how do we create it let try to code with out and render it okk


// function App(){
//   return <div>
//       <CardWrapper>
//         hii there
//       </CardWrapper>
//       <CardWrapper>
//         hii there
//       </CardWrapper>
//   </div>
// }



// function CardWrapper({children}){

//   //create a div which has a border (hint : the way to create a border is border : "2ps solid black")
//   //and inside the div ,render the prop
  
//   return <div style={{border:"2px solid black ",padding:20}}>
//     {children}
//   </div>
// }

// export default App;


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//assignment 
//create a component that takes a todo id as input 
// and renders it by fetching it from the
//  server the parent component should have a button ,
// clicking on which the next todo is fetched 

//server : https://sum-server.100xdevs.com/todo?id=1



// import { useState } from 'react';
// import { useEffect } from 'react';


// function App() {
//   //const [todoId,setTodosId]=useState(1);
//   const [todo,setTodos]=useState([]);
  
//   useEffect(() => {
//     setInterval(() => {
//       fetch(`https://sum-server.100xdevs.com/todo?id=${todoId}`)
//         .then(async function (res) {
//           const json = await res.json();
//           setTodos((prevTodos) => [...prevTodos, json]); // Append new todo to the list
//         })
//         .catch((err) => console.error("Error fetching todos:", err));
//     }, 10000);
//   }, []);
  

//   return (
//      <div>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
//      </div>
//   )
// }

// function Todo({title,description}){

//   return <div>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//   </div>

// }




// export default App;


// import { useState, useEffect } from 'react';

// function App() {
//   const [todos, setTodos] = useState([]); // Initialize as an empty array

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       fetch(`https://sum-server.100xdevs.com/todo?id=1`) // Fetch data from the server
//         .then((res) => res.json())
//         .then((json) => {
//           setTodos((prevTodos) => [...prevTodos, json]); // Append the new todo
//         })
//         .catch((err) => console.error("Error fetching todos:", err));
//     }, 10000); // Run every 10 seconds

//     return () => clearInterval(intervalId); // Cleanup interval on unmount
//   }, []);

//   return (
//     <div>
//       <h1>Todo List</h1>
//       {todos.map((todo, index) => (
//         <Todo
//           key={index}
//           title={todo.title || `Todo ${index + 1}`}
//           description={todo.description || "No description available"}
//         />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default App;


//-----------------------------------------------------------------------------------------------------------
//ham yha practice krr rhe hai jo padhe uska revision 


//1.object destructuring:

// import { useState } from 'react'
// import React from 'react';

// function App() {
//   //object creation 
//   const person={f:'saurabh',l:"tripathi",age:21};
  
//   //destructuring
//   const{f,l,age}=person;

  
//   //bhai ye dekh maine kya kiya
//   // return (
//   //   <>
//   //     console.log({f});
//   //     console.log({l});
//   //     console.log({age});
//   //   </>
//   // )


  
  
//     // Log outside JSX
//     console.log(f);
//     console.log(l);
//     console.log(age);



//     //nested object destructuring

//     const student={fa:"saurabh" ,da:{gfa:"annu", ga:"female"}};

//     const {fa, da:{gfa,ga}}=student;

//     console.log(fa);    
//     console.log(ga);    
//     console.log(gfa);    
//     console.log(student.da);    


  
//     return (
//       <>
//         <h1>Person Details</h1>
//         <p>First Name: {f}</p>
//         <p>Last Name: {l}</p>
//         <p>Age: {age}</p>
//         <br />
//         <h1>Person Details 2</h1>
//         <p>First Name: {fa}</p>
//         <p>Last Name: {gfa}</p>
//         <p>Age: {ga}</p>
//       </>
//     );

// }



// export default App;



//-------------------------------------------------------------------------------------------------------------------------------
//ham abb ren-rendering in react ko dekhenge ::

//procees of updating and rendering component
//to reflect changes in the application state or props.
// def: 
    //basically anytime a final dom manipulation happens or when react 
    //actually updates the dom it is called a rerender.




    //abb iska implementaion upar ho chuka hai chlo refer krte hai
    //line number 80-110 pe code hai 


    //ye rha code bhai 

// import { useState } from 'react'
// import React from 'react';

// function App() {
//   // const [title,setTitle]=useState(" my name is saurabh tripathi");

//   // function hitbutton(){
//   //   setTitle("my name is saurabh "+Math.random())
//   // }
//   return (
    
//      <div>
//       <HeaderwithButton />
//       {/* <button onClick={hitbutton}>click kro</button> */}
//       {/* <Header title={title}></Header> */}
//       <Header title="my name is harkirat"/>
//       <Header title="my name is harkirat"/>
      
//      </div>
//   )
// }

// function HeaderwithButton(){

//   const [title,setTitle]=useState(" my name is saurabh tripathi");

//   function hitbutton(){
//     setTitle("my name is saurabh "+Math.random())
//   }
//   return <div>
//     <button onClick={hitbutton}>click kro</button>
//     <Header title={title}> </Header>
//   </div>
// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }
 
// export default App;


//------------------------------------------------------------------------------------------------------------------------------------------
//abb ham yhi same cheez using memo smjhte hai 


// import React from "react";
// import { useState } from "react";
// import { memo } from "react";

// function App(){

//   const [title,setTitle]=useState("my name is saurabh tripathi");
  
//   function updated(){
//     setTitle("my name is saurabh "+Math.random());
//   }
//   return<div>
//          <button onClick={updated}>button to click kro </button>
//          <br />
//          <Header title={title}></Header>
//          <br />
//          <Header title={"my name is annu tripathi"}></Header>
//          <br />
//          <Header title={"mai choti si bahini hu saurabh ki "}></Header>

//   </div>
// }


// // function Header({title}){

// //   return <>
// //     {title}
// //   </>
// // }

// const Header=memo(function Header({title}){

//   return <div >
//     {title}div
//   </div>
// })

// export default App;


//------------------------------------------------------------------------------------------------------------------------------
//significance of key in react

//imp of keys in todo app:

// import React from "react";
// import { useState } from "react";

// function App(){

//   const [todo,setTodo]=useState([
//     { title: "apun", name: "saurabh", id: 1 },
//     { title: "bapun", name: "annu", id: 2 },
//     { title: "tapun", name: "chummi", id: 3 },
//   ]);

//   function addtodo(){
//     const newtodo={
//       title:"chapun",name:"bahini",id: todo.length + 1
//     };
//     setTodo([...todo,newtodo]);
    

//   }

//   return<div>
//     <button onClick={addtodo}>button </button>
//     {todo.map(item =>(
//       <Todo key={item.id} title={item.title}
//       name={item.name}></Todo>

//     ))}
    
//   </div>

// }

// function Todo({title,name
// }){
//   return<div>
//     <h3>{title}</h3>
//     <p>{name}</p>
//   </div>
// }

// export default App;


//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//abb ham wrapper components ko padhenge okk

//example dekhte hai phir smjhenge 

// import React from "react";

// function App(){

//   return <div>
//     <CardWrapper>Hii there</CardWrapper>
//     <CardWrapper>kaise hoo </CardWrapper>
//     <CardWrapper>mai thik huu</CardWrapper>
//   </div>
// }

// function  CardWrapper({children}){
   
//   return <div style={{border:"2px solid orange ",padding:20}}>
//     {children}
//   </div>
// }

// export default App;


// Simple Shabdon Mein:
// Wrapper Component ek box hai jo content ko wrap karta hai aur us box me ek common style apply karta hai.
// Ye ek hi design ko bar-bar use karne ki wajah se code ko clean aur organized rakhta hai.



//------------------------------------------------------------------------------------------------------------------------------------------

// Class Components vs Functional Components 

// In React , components are the building block of a user interface 
// there are two main types of components : 
// class-based componets and functional componets


//diff:
//class components:- react ke purane type ke components hain jo  react.components ko 
                   
//                  extends karke bnte hai  ye state aur lifecycle methods handle karte hain.

//fucntional components: ye sirf js funcitons hote hain jo props accept karte hain aur react elements 
// return karte hain fucntional components react hooks ke baad jyaga popularity gain ki 


// 2.state manage ke liye:
//   1.class comp: ye "this.state " use karte hai 
//   2.hooks ke sath usestate ka use hota hai jo state ko


//3. Lifecycle methods:
     //1.class comp: methods fix hoti hai ,{componentsDidMount,componentsDidUpdate,ComponentswillUnmount}
     //2.hooks like "useEffect" ke sath lifecycle manage hoti hai

//4. syntax:

  //  class component extends React.component{
  //   constructor(props){
  //     super(props);
  //     this.state={count:0};
  //   }

  //   render(){
  //     return <div>Count:{this.state.count}</div>
  //   }
  //  }


   //functional
  //  fucntion mycomponet({count}){
     
  //   return <div>
  //     {count}
  //   </div>
  //  }



  //remark:
  // functional components are generally faster than class components due to the absence of complex this binding and overhead.


//functional components are simple ,concise ,aur hooks ke sath powerful hote hain ,
 //modern react me funtional components recommended hain 

 ///----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 //Hooks are function in react that let you use state and lifecycle feature in funcitnal components 
 //1.useState:comp ke ander state ka use krne ke liye

 //2.useEffect: side effects manage karne ke liye jaise data fetch karna 
 //3.useMemo  avoiding unnecessary calculation avoid krna ke liye 
 
 //4.useCallback: Memoize functions