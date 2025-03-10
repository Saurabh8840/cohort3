"use Client"

//-------------------------------------------------------before using signIn,Signout

// import { useRouter } from "next/router";

// export const Appbar=()=>{

//     const router=useRouter();
//     return <div>
//         <button onClick={()=>{
//             router.push("/api/auth/signin")}}>
//             Signin

//         </button>
    
//     </div>

// }






//--------------------------------------------






import{signIn,signOut} from "next-auth/react"
import { useSession } from "next-auth/react";

export const Appbar=()=>{

    const session=useSession();
    return <div>
        <button onClick={()=>{signIn();}}>Signin</button>
        <button onClick={()=>{signOut();}}>Signout</button>
    
    </div>

}