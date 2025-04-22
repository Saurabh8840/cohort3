import { useState } from "react"

function Login(){
    const [islogged,setlogged]=useState(false);
    
    return <div>
         <p>{islogged ? "Welcome, Dost!" : "Please log in."}</p>
        {islogged?<button onClick={()=>setlogged(false)}>Logout</button>:<button onClick={()=>setlogged(true)}>Login</button>}
        
    </div>
}

export default Login;