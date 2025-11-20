// import { NextRequest } from "next/server";
// // import {PrismaClient} from "@prisma/client"


// const client=new PrismaClient();
// export async function POST(req:NextRequest){

//     //EXTRACT the body
//     const body= await req.json(); 
    
//     const user=await client.user.create({
//         data:{
//             username:body.username,
//             password:body.password
//         }
//     })

//     console.log(user.id)

    
//     //store db in dtatabse


//     return Response.json({
//         message:"Signup up "
//     }
//     );
// }

import { NextRequest,NextResponse } from "next/server";


export async function POST(req:NextRequest){
     
    const body= await req.json();

    return NextResponse.json({
        username:body.username,password:body.password
    })
}