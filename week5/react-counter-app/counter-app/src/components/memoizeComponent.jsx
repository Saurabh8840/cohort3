

// import react from "react";
// import { useMemo } from "react";

// export const MemoizeComponent=({value})=>{
   
//     const expensiveResult=useMemo(()=>{
//         console.log('calculating expensive result...');
//         return value*2;
//     },[value]);


//     return <div>
//         <p>Value:{value}</p>
//         <p>Expensive Result:{expensiveResult}</p>
//     </div>
  

    
// }


import React, { useMemo } from "react";

export const MemoizeComponent=({value})=>{
       
    const handleChange=useMemo(()=>{
       return value*2+10;
    },[value]);

    return <div>
        <p>paro meri paro :{value} </p>
        <p>new hii : {value}</p>
    </div>
        
    
}