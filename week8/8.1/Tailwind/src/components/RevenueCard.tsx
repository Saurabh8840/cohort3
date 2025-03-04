//
// initailalllyy we assume we are creating a full width card 

import React from "react"

export const RevenueCard=({
     title,
    showWarning,
    orderCount,
    amount
}) =>{
    return <div className=" bg-white rounded shadow-md p-4">
        <div className="flex text-gray-700">
            <div>
            {title }
            </div>
            
             ?
        </div>
        <div className="flex justify-between pt-2">
            <div className="font-semibold text-2xl">
               ₹ {amount}
            </div>
            {orderCount ? <div className="flex" >
                <div className="text-blue-700">
                    {orderCount} order(s) 
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </div> : null}
        </div>
    </div>
}