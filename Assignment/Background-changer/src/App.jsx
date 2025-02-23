
import React from "react";
import { useState } from "react";

function App() {

  const [color,setcolor]=useState("olive");

  return <>
  

    <div className="flex justify-center items-center   w-full h-screen duration-200" style={{background:color}}>

    <div className="border p-2 h-15 w-3/4 bg-blue-100 rounded-2xl">
        <button className="m-1 p-1 border border rounded-lg bg-white hover:bg-red-400"  onClick={()=>setcolor("red")}>Red</button>
        <button className="m-1 p-1 border border rounded-lg bg-white hover:bg-yellow-400" onClick={()=>setcolor("yellow")}>Yellow</button>
        <button className="m-1 p-1 border border rounded-lg bg-white hover:bg-black hover:text-white" onClick={()=>setcolor("black")}>Black</button>
        <button className="m-1 p-1 border border rounded-lg bg-white hover:bg-purple-400" onClick={()=>setcolor("purple")}>Purple</button>
        <button className="m-1 p-1 border border rounded-lg bg-white hover:bg-green-400" onClick={()=>setcolor("green")}>Green</button>
        <button className="m-1 p-1 border border rounded-lg bg-white hover:bg-blue-400" onClick={()=>setcolor("blue")}>Blue</button>
        <button className="m-1 p-1 border border rounded-lg bg-white hover:bg-orange-400" onClick={()=>setcolor("orange")}>Orange</button>
    </div>


    </div>
  </>
  
}

export default App;
