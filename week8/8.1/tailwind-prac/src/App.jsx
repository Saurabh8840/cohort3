import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";

function App() {
  const [count, setCount] = useState(0)

  return (<div className='grid grid-cols-1 md:grid-cols-3'>

    <div className='bg-red-500'>hii there</div>
    <div className='bg-blue-500'>hii there</div>
    <div className='bg-yellow-500'>hii there</div>

  </div>
    
  )
}

export default App
