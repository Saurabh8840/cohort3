// import {PrismaClient} from "@prisma/client"

// const prisma =new PrismaClient();


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


//insert data in user table
async function insertdata(username:string,password:string,firstname:string,lastname:string) {

    const res=await prisma.user.create({
        data:{
            username,
            password,cd
            firstname,
            lastname
        }
    })
    console.log(res);
    
}
//insertdata("saurabh12","123456","saurabh","tripathi");
// insertdata("annu12","123456","annu","tripathi");
// insertdata("bahini12","123456","babu","tripathi");


//write a function that let u update data in table 

interface updateparams{
    firstname:string;
    lastname:string;
}

async function updateuser(username:string,{firstname,lastname}:updateparams) {

     const res=await prisma.user.update({
        where:{username},
        data:{
            firstname,
            lastname
        }

     });
     console.log(res);

    
}
// updateuser("annu12",{
//     firstname:"motki",
//     lastname:"ree"
// })


//get a user details

async function getuser(username:string) {

    const user=await prisma.user.findFirst({
        where:{
            username:username
        }
    })
    console.log(user);
    
}
// getuser("annu12");

//prisma  let you define   relationship to relate tables with each other 

// types of relationship:-

// 1.one to one 
// 2.one to many 
// 3.many to one 
// 4.many to many

//2.for the todo app there is a one to many relationship 

// 1.one to many 

//saurbah - 1.go to gym, 2.wake up at 5am  ,3.talk with annu 

async function createTodo(userid:number,title:string,description:string) {

    const todo=await prisma.todo.create({
        data:{
            title,
            description,
            userid
        },
    });
    console.log(todo);
    
}
// createTodo(1,"go to gym","go to gym and do 10 pushups");

async function  getTodos(userid:number) {

    const todos=await prisma.todo.findMany({
        where:{
            userid:userid,
        },

    });
    console.log(todos);
    
}
// getTodos(1)

//gettodo and user detail 
async function  getTodosanduserdetail(userid:number) {

    const todos=await prisma.todo.findMany({
        where:{
            userid:userid,
        },

    });
    const user= await prisma.user.findUnique({
        where:{
            id:userid
        }
    })
    console.log(todos);
    console.log(user);
    
}
getTodosanduserdetail(1);



