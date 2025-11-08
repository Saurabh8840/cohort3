//we use tsc -b to build file 

let x:number=1;

console.log(x)

//types in typs
let age:number=20;
let ages=20;

let names:string="saurabh tripathi";


//let's write a function 



const greeting=(x:string):void=>{
   console.log("hello: "+x);
}

greeting("saurabh")

//lets learn how to assig a return type of a function in typescript

interface Value{
    a:number;
    b:number;
    c:number;

}

const sum=(value:Value) :number=>{
    return (value.a+ value.b+value.c)
}
const myValue:Value={a:10,b:20,c:10};

console.log("Total sum"+sum(myValue));

//using boolean

const isLegal=(x:number):boolean=>{
    if(x>18){
        return true;
    }else{
        return false
    }
}

console.log(isLegal(22));


//delayed fucntion execution

const delaycall=(fn:()=>void):void=>{
     setTimeout(fn,1000)
}

delaycall(()=>{
    console.log("you are dealyed")
})



//interface

//a object representing a user:

interface User {
    firstname:string;
    lastname:string;
    email:string;
    age:number;
    password?:number;
}

const isuserLegal=(user:User):void=>{
    if(user.age>18){
        console.log(user.firstname +" "+ user.lastname+"is :"+"balik")
        
    }else{
        console.log("not balik "+user.firstname)
    }
}

let users: User= {
    firstname:"saurabh",
    lastname:"tripathi",
    email:"saurabhofficial8840@gmail.com",
    age:21,
    // password:12234
}

isuserLegal(users)

//create a reactcomponent that take todo as input 


// const Todoitem=({todo})=>{
     
//     return <div> 
//        <p>{todo.title }</p>
//        <p>{todo.description} </p>
//     </div>
// }


// const App=()=>{
//     const [todos,setTodos]=useState([])
    

//     useEffect(()=>{

//         const fetchTodos=async()=>{
//             try {
//             const response=await axios.get("https://localhost/todos");
//             setTodos(response.data);
//         } catch (error) {
//             console.log("error while fetchingdata",error)
//         }
//         };

//         fetchTodos
        
//     },[])
    

//     return <div>
//        return <div>
//        {todos.map((todo,index)=>(
//                 < Todoitem todo={todo} key={index} />
//         ))}

//     </div>


// }


//how to convert above code in typs
// import React ,{useState} from "react";

// interface Todo{
//     title:string;
//     description:string;
//     status:boolean
// }

// interface TodoProps{
//     todo:Todo;
// }

// const Todoitem:React.FC<TodoProps>=({todo})=>{
//     return (
//         <div>
//          <p>{todo.title}</p>
//          <p>{todo.description}</p>
//          <p>{todo.status ? "Completed" : "Incomplete"}</p>
//         </div>
//     )
// } 



// const App:React.FC=()=>{

//     const [todos,setTodo]=useState<Todo>({
//         title:"saurabh",
//         description:"heelo saurabh tripathi",
//         status:true
        
//     }
//     )

//     return (
//         <div><Todoitem todo={todos} /></div>
//     )
// }

// export default App;


//types allow you to aggreagate data together in a manner very similar to interface 

type Admin={
     firstname:string;
     lastname:string;
     age:string;

}

type stringornumber=string|number;

type Employee={
    name:string;
    startDate:Date;
}

type Manager={
    name:string;
    department:string;
}

type TeamLead=Employee & Manager;

const teamLead:TeamLead={
    name:"saurabh",
    startDate:new Date(),
    department:"software developer "
}

//generics
//generics  enable you to create components that work with any data type while still providing compile-time 
//type-safety

function identity<T>(arg:T):T{
    return arg;
}

let output1=identity<string>("mystring ");
let output2=identity<number>(100)

