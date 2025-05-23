
import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        
        <Route path="/Signup"  element={<Signup/>}/>
        <Route path="/"  element={<Signup/>}/>
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/SendMoney" element={<SendMoney/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
