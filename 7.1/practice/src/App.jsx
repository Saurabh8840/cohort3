


// import { BrowserRouter,Routes,Route } from 'react-router-dom'

// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'




// //this is not good way to client side routing 
// //<button onClick={()=>{window.location.href="/" ;}} >Landing page</button>
// //<button onClick={()=>{window.location.href="/dashboard" ;}}>Dashboard Page</button>
// //so we use navigate ? okk...

// function App() {

 

//   return (

//     <div>
//       <div>
//         <button onClick={()=>{navigate("/") ;}} >Landing page</button>

//         <button onClick={()=>{navigate("/dashboard") ;}}>Dashboard Page</button>
//       </div>
//     <BrowserRouter>
         
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard/>}> </Route>
//             <Route path="/" element={<Landing />}> </Route>
//           </Routes>
      
//     </BrowserRouter>
//     </div>
//   )
// }



// export default App




//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//yha pe navigation use hua hai client side routing ke liye 
// kyu ki window.location.href pura page baar baar load krr rha tha isiliye 
//and navigation only work under browser router not every where okk



// import { BrowserRouter,Routes,Route } from 'react-router-dom'

// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'
// import { useNavigate } from 'react-router-dom'



//this is not good way to client side routing 
//<button onClick={()=>{window.location.href="/" ;}} >Landing page</button>
//<button onClick={()=>{window.location.href="/dashboard" ;}}>Dashboard Page</button>
//so we use navigate ? okk...

// function App() {

 

//   return (
//     <div>
//     <BrowserRouter>
//           <Appbar/>
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard/>}> </Route>
//             <Route path="/" element={<Landing />}> </Route>
//           </Routes>
      
//     </BrowserRouter>
//     </div>
//   )
// }

// function Appbar(){
//   const navigate=useNavigate();

//   return <div>
//       <div>
//         <button onClick={()=>{navigate("/") ;}} >Landing page</button>

//         <button onClick={()=>{navigate("/dashboard") ;}}>Dashboard Page</button>
//       </div>
//   </div>
// }

// export default App

//---------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------
//yaha ata hai concept lazy loading kaa okk
//hame suspense API bhi use karna hoga



// import { Suspense,lazy } from 'react'
// import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'


// //this is how to import 
// const Dashboard= lazy(()=> import('./components/Dashboard'))
// const Landing =lazy(()=> import('./components/Landing'))



// function App() {

 

//   return (
//     <div>
//     <BrowserRouter>
//           <Appbar/>
//           <Routes>
//             <Route path="/dashboard" element={ <Suspense fallback={"loading.."}> <Dashboard/></Suspense>}/>
//             <Route path="/" element={ <Suspense fallback={"loading.."}> <Landing/></Suspense>}/>
//           </Routes>
      
//     </BrowserRouter>
//     </div>
//   )
// }

// function Appbar(){
//   const navigate=useNavigate();

//   return <div>
//       <div>
//         <button onClick={()=>{navigate("/") ;}} >Landing page</button>

//         <button onClick={()=>{navigate("/dashboard") ;}}>Dashboard Page</button>
//       </div>
//   </div>
// }

// export default App;



//------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------

//Let's go for Prop drilling

// import React from "react";
// import { useState } from "react";

// function App(){
//   const [count,setCount]=useState(0);

//   return <div>
//     <Count count={count} />
//     <Buttons count={count} setCount={setCount} />
//   </div>
// }

// function Count({count}){
//   return <div>
//     {count}
//   </div>
// }

// function Buttons({count,setCount}){
  
//   return <div>
//     <button onClick={()=>{ setCount(count+1)}}>Increase</button>
//     <button onClick={()=>{ setCount(count-1)}}>Decrease</button>
//   </div>
// }

// export default App;



//---------------------------------------------------------------------------------------------------
//contex API 

import { useState,useContext } from "react";
import { CountContext } from "./context";

function App(){
  const [count,setCount]=useState(0);
 
  //wrap anyone that wants to use the teleported value inside a provider 
  return <div>
    <CountContext.Provider value={count}>

    <Count setCount={setCount} />
    </CountContext.Provider>
    
    {/* <Buttons count={count} setCount={setCount} /> */}
  </div>
}

function Count({setCount}){
  return <div>
    <CountRenderer />
    <Buttons  setCount={setCount}/>
  </div>
}

//it renders count inc/dec value 
function CountRenderer(){
  const count=useContext(CountContext);
  return <div>
    {count}cd ..
    
  </div>
}

function Buttons({count,setCount}){
  const count =useContext(CountContext);
  return <div>
    <button onClick={()=>{ setCount(count+1)}}>Increase</button>
    <button onClick={()=>{ setCount(count-1)}}>Decrease</button>
  </div>
}

export default App;




//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

// yha se shuru karte hai revision ok dost yes 

// we will understand about context api and prop drilling

//Routing:

//is a way to managae navigation in a react app so users can move 
//between pages or views without the page actually reloading .this make the 
//app feel faster and smoother 



//practice time


// import { Suspense,lazy } from 'react'
// import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'


// //this is how to import 
// const Dashboard= lazy(()=> import('./components/Dashboard'))
// const Landing =lazy(()=> import('./components/Landing'))



// function App() {

 

//   return (
//     <div>
//     <BrowserRouter>
//           <Appbar/>
//           <Routes>
//             <Route path="/dashboard" element={ <Suspense fallback={"loading.."}> <Dashboard/></Suspense>}/>
//             <Route path="/" element={ <Suspense fallback={"loading.."}> <Landing/></Suspense>}/>
//           </Routes>
      
//     </BrowserRouter>
//     </div>
//   )
// }

// function Appbar(){
//   const navigate=useNavigat);

//   return <div>
//       <div>
//         <button onClick={()=>{navigate("/") ;}} >Landing page</button>

//         <button onClick={()=>{navigate("/dashboard") ;}}>Dashboard Page</button>
//       </div>
//   </div>
// }

// export default App;



