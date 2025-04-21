import { useState } from 'react'

import Card from './components/Card'

function App() {

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden ">
         <div className="border-2 mx-12 max-w-sm  border-gray-600 hover:border-white rounded-2xl shadow-md p-6 mt-6 space-y-4 ">
            <Card  name={"Akriti Tripathi"} 
            bios={"She is a pretty boy"}
            topic={"Interests"}
            />
         </div>
    </div>
    
  )
}

export default App
