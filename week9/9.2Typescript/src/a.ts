// tsconnfig.js me ja kr chage kr do
// outdir->./dist
// rootdir ->./src



// let x: number = 13;
// console.log(x);


let j: number=10;
console.log(j);

// let a:string="saurabh";
// console.log(a);




// //how to give types to argument of a function 
// //using js
// // function greet(firstname){
// //     console.log("hello "+firstname);
// // }
// // greet("saurabh");


function namaste(bar:number):void{
    console.log("hanji ji sasriya kal"+bar);
}
namaste(20);

function jodo(a:number,b:number):number{
    return a+b;
}
console.log(jodo(2,4));

//delayed function 



// //using ts
// function greet(firstname:string){
//     console.log("hello "+firstname);
// }
// greet("saurabh");

// //2.
// function greets(firstname:string,age:number){
//     console.log("hello "+firstname+"age : "+age);
// }
// greets("saurabh",21);

// //3.sum code

// // function sum(a:number,b:number){
// //     return a+b;
// // }
// // const val=sum(2,10);
// // console.log(val);

// //type inference
// function sum(a:number,b:number):number{
//     return a+b;
// }
// const val=sum(2,10);
// console.log(val);

// //return true of false based on age 

// function islegal(age:number){

//     if(age>18){
//         return true;
//     }else{
//         return false;
//     }
// }

// //string ,number,boolean
// let xa=islegal(18);
// console.log(xa);


// //Create a function that takes another function as input, and runs it after 1 second.
// function taketime(fn:()=>void){
//     setTimeout(fn,2000);
// }

// taketime(function(){
//     console.log("hii there");
// })


function greet(name:string){
    return `hello, ${name}`;
}

function processs(callback:(name:string)=>string){
    console.log(callback("alice"));
}

processs(greet);

// //tsconfig file 

// //rootdist
// //targetdist

// //the change is direly comit 
// //arrow func..

// const  greetsp=(name) =>`Hello, ${name}!`

//--------------------------------------------------------------

//step-6 Interfaces
//it is a blueprint who define structure of an object.

//a set of rule that define how a object should look like ..

//object should be like user

interface users{
    firstname:"saurabh",
    lastname:"Tripathi",
    email:"saurabh@exmaple.com",
    age:22
};

function detail(us:users){
    console.log("hello "+"saurabh")
}
//What are interfaces

// function isvalid(user:{
//     firstname:string;
//     ls:string,
//     age:number
// }){
//     if(user.age>28){
//         return true;
//     }else{
//         return false;
//     }
// }

// function namaste(user:{
//     firstname:string;
//     ls:string,
//     age:number
// }){
//    console.log("hii there"+user.firstname);
// }
// isvalid({
//     firstname:"saurabh",
//     ls:"annu",
//     age:20
// })
// isvalid({
//     firstname:"annu ",
//     ls:"ji",
//     age:21
// })
//isme code repetion hai easy way is using interface
//code ko samjho

// interface User{
//     firstname:string;
//     ls:string;
//     age:number;
//     email?:string  //if user want only then he can pass

// }
// function isvalid(user:User){
//     if(user.age>28){
//         return true;
//     }else{
//         return false;
//     }
// }

// function namaste(user:User){
//    console.log("hii there"+user.firstname);
// }
// const y=isvalid({
//     firstname:"saurabh",
//     ls:"annu",
//     age:20
// })
// console.log(y);
// namaste({
//     firstname:"annu ",
//     ls:"ji",
//     age:21
// })


//create a react component that takes todos as an input and renders them

//-----------------------------------------------------------------------------------------------------------------------------------------
// interface Person {
//     name:string;
//     age:number;
//     greet(phrase:string):void;
// }
// class Employee implements Person{
//     name:string;
//     age:number; 
//     constructor(n:string,a:number){
//         this.name=n;
//         this.age=a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} ${this.name}`);
//     }
// }
// const e=new Employee("Saurabh",22);
// console.log(e.name);
// console.log(e.age);

//hole gole of typescript  is to make code strict 


//-------------------------------------------------------------------------------------------
//what are types?

//---very similar to interface ,types let you agregate data together.

// type Users={
//     fn:string,
//     ls:string,
//     age:number  
// }

// 1.Unions

//---khudse padho acche se


// type Emp={
//     name:string;
//     startdate:Date;
// };

// type Manager={
//   name:string;
//   department:string;

// }

// type TechLead=Emp&Manager;
// type TechLead={
//     name:string;
//     department:string;
//     startdate:Date;
// }
// const t:TechLead={
//     name:"saurabh",
//     startdate:new Date(),
//     department:"assad"
// }


//step 8-Arrays in Ts

//if you want to access arrays in typescript it's as simple as adding a [] annotation next 

// function maxvalue(arr:number[]){
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max;
// }
// maxvalue([1,2,3])

// [] -- bss yhi add krna hai extra for the array part

// type Numberarr=number[]
// function maxvalue(arr:Numberarr){
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max;
// }
// maxvalue([1,2,3])


// cd 


//gnereics


function fname<T>(arr:T[]){
    return arr[0];
}

const el=fname<string>(["saurabh","tripathi",1,2]);
console.log(el.toLowerCase());