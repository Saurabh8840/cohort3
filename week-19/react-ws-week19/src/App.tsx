import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [LatestMessage,setLatestMessage]=useState("");
  const [message,setMessage]=useState("");
  useEffect(()=>{
    const socket=new WebSocket('ws://localhost:8080')
    socket.onopen=()=>{
      console.log('Connected')
      setSocket(socket)
    }
    socket.onmessage=(message)=>{
      console.log('Recieved message:',message.data)
      setLatestMessage(message.data)
    }

    return ()=>{
    socket.close()
    }
    
  },[])
  
  if(!socket){
    return <div>
       connecting to socker server Loading...
    </div>
  }
  return (
    <>
      <input onChange={((e)=>{
        setMessage(e.target.value)
      })}></input>
      <button onClick={()=>{socket.send(message)}}>Send</button>
      {LatestMessage}
    </>
  )
}

export default App
