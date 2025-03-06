import { NextRequest } from "next/server"
import {PrismaClient} from "@prisma/client"

const client =new PrismaClient();

export function GET(){
    ///databse logic
    return Response.json({
        email:"saurabh@gmail.com",
        name:"saurabh"
    })
}

export async function POST(req:NextRequest){

    //extract the body
    const body=await req.json();
    client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })

    //store the body in the database
    console.log(body)

    //LOGIC
    return Response.json({
        message:"you are logged in "
    })
}