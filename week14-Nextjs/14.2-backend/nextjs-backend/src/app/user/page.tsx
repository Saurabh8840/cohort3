// "use client"
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function user(){

//     const [data,setData]=useState({
//         email:"",
//         name:" "
//     });
//     const [loading,setLoading]=useState(true);

//     useEffect(()=>{
//         axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
//           .then(res=>{
//             setData(res.data);
//             setLoading(false);
//           })
//     })

//     return <div>
//         {data.name},
//         {data.email}
//     </div>

// }

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------


import axios from "axios";

async function fetchData(){
    const response=await axios.get("http://localhost:3000/api/user")
    return response.data;
}

export default async function user(){
    const data=await fetchData();

    return (
        <div>
            name={data.name} ,
             email={data.email}
        </div>
    )
}