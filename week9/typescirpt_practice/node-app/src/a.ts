// // const x=1;
// // console.log(x);

// let x1:number=1;
// console.log(x1);

// //typ provide some basic types 
// //number,string,boolean,null, undefined

// const logss:string="saurabh ";
// console.log("hello "+logss);

// function greets(greet:string){

//     console.log("hello "+ greet);
// }
// greets("saurabh");


// //return type to a funtion 

// function reply(a:number,b:number):number{
//     return a+b;
// }
// console.log(reply(2,3));

// //return true or false based on user is 18 + or not

// function age(a:number){
//     if(a<18){
//         return false;
//     }else{
//         return true;
//     }

// }
// age(21);

// //

// function delay(fn:()=>void ){
//     setTimeout(fn,1000);
// }
// delay(function(){
//     console.log("hii there ")
// });

// //typscipt me type dena bahut jarurui hai like isme fn: pe ()=>void diya huu
// function num(fn:()=>void){
//     setTimeout(fn,1000);
// }
// num(function(){
//     console.log("abb print krr ");
// })

// //interface

// //appling interface to user object

// const newuser:newUser={
//     firstname:"saurabh",
//     lastname:"tripathi"
// }
// interface newUser{
//     firstname:string,
//     lastname:string
// }
// console.log("hello my name is "+newuser.firstname);


// //creating a function is legal that return true or false

// const mans={
//     firstname:"surbhi",
//     lastname:"tripathi",
//     age:"19"
// }

// interface Mans{
//     firstname:string,
//     lastname:string,
//     age:number
// }

// function islegals(user:Mans){
//     if(user.age>18){

//     }
// }

// //creating react component that take todo as input



// const user={
//     firstname:"saurabh",
//     lastname:"tripathi"
// }
// detialbox(user);

// interface detailtyp{
//      firstname:string,
//      lastname:string
// }


// function detialbox(user:detailtyp){
     
//     console.log("helo my name is "+user.firstname);
// }


// //
// interface TodoType{
    
// }

// interface User{
//     firstname:string,
//     lastname:string,
//     a:number 
// }

// function islegal(user1:User){
//     if(user1.a>18){
//         return true;
//     }else{
//         return false;
//     }
// }

// const user1={
//     a:19,
//     firstname:"saurabh",
//     lastname:"tripathi"
// }
// islegal(user1);


// //todos as input and render then 

// const todos={
//     id:1,
//     title:"go to gym",
//     description:"i will go to gym everyday"
// }
// todolist(todos);

// interface Todo{
//     id:number,
//     title:string;
//     description:string
// }

// function todolist(todos:Todo){
//     console.log(" id: "+todos.id);
//     console.log("title :"+todos.title);
//     console.log("description :"+todos.description);
// }


// //step7 types
// type stringornumber=string|number;
 
// function printid(id:stringornumber){
//     console.log(`id:${id}`);

// }
// printid(101);
// printid('202');
// //

// type Employee={
//     name:string;
//     // startDate:Data;
// };




//function in typscript

function sum(a:number,b:number){

    return a+b;
}

sum(2,5);


function greet(name :string):string{
    return "jehsdifj"+name
}


//when application become more complex then we uses interfcaes and types

let user={
    name:"saurabh",
    age:21,
    address:{
        city:"chandigarh",
        country:"india",
        pincode:184
    }

}

//now above is a complex object and have diffrent types of function like string ,booolean ,number
//that's why we use interface to define type hai kya object
//interface is used to define own custom type of object

interface User1{
    name:string,
    age:number,
    address:{
        city:string,
        country:string
        pincode:number
    }
}

let user1:User1={
    name:"saurabh",
    age:21,
    address:{
        city:"chandigarh",
        country:"india",
        pincode:184
    }

}

function isLegal(user1:User1){
    if(user.age>=18){
        return true
    }
    else{
        return false
    }
}

const lets=isLegal(user1);
console.log(lets);



//learn about ?  in interface

interface User{
    name:string;
    age:number;
    address?:{
        city:string,
        country:string,
        pincode:number
    };

}


//interface ke under function

interface People{
    name:string,
    age:number,
    greet():string,
    // greet:()=>string,
}

let Person:People={
    name: "saurabh",
    age: 23,
    greet(): string {
        return "abbe bhai good morning";
    }
}

let greeting =Person.greet();
console.log(greeting);




///            interface
//            /         \
//           /           \
//   key value pair     class 

  //let user:User={   |   class Rectangle implements User{}
//  name:"saurabh"    |    constructor(){}
//  }                 |    area()
//                    |    }
//                    |   let react=new Reactangle{}



// lets create a class that implements user

interface Peoples{
    name:string,
    age:number,
    // greet():string,
    // greet:()=>string,
}

class Manager implements Peoples{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}

let user2=new Manager("hohn ",30);
console.log(user2.age);

