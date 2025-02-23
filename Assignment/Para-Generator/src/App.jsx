import React , {useState} from 'react'
import './App.css'

function App() {
  const wordsList=["saurabh","tripathi","annu","tripathi","props","state","hook","render","aaj ","ki raat","hushn se ","Don","Banega","Kaun","kya bolti public", "render", "virtual", "browser", "frontend", "backend"];
  

  const [length,setLength]=useState(10);
  const [paragraph,setParagraph]=useState("");

  const generateparagraph=()=>{
    const generatedWords= Array.from({length},()=>wordsList[Math.floor(Math.random()*wordsList.length)]);
    setParagraph(generatedWords.join(" "));
  }

  return <div className='bg-voilet flex justify-center items-center    '>
  
       <div  >
          <div className='  h-11  font-serif text-3xl'>
            <h1>Para Generator</h1>
          </div>
          <div className='flex '>
            <div className=' h-11 w-3/4'>
            <input  className='border  p-3  rounded-xl w-full h-full'  onChange={(e)=>setLength(Number(e.target.value))} placeholder="Enter Number of Words"></input>
            </div>
            
            <button onClick={generateparagraph}  className='border m-1 hover:shadow-lg ring-4  w-20 h-10 rounded-xl bg-black text-white' >Generate</button>
            
            
          </div>
          <p className=' border mt-4'>{paragraph}</p>
       </div>
       
  </div>
}

export default App
