import { useMemo, useState } from "react";
const HeavyCal=({value})=>{
    const calc=useMemo(()=>{
      return value*2;
    },[value]);
    return <div>
        <p>Value:{value}</p>
        <p>Expensive Result:{calc}</p>
    </div>
}
function ExpensiveCalcu(){
    const [inpvalue,setinpValue]=useState(5);
    return <div>
        <div>Calculation</div>
        <input 
        type="number"
        value={inpvalue}
        placeholder="input a number"
        onChange={(e)=>{setinpValue(Number(e.target.value))}} />
        <HeavyCal value={inpvalue} />
    </div> 
}
export default ExpensiveCalcu;