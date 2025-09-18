"use strict";
// const x=1;
// console.log(x);
let x1 = 1;
console.log(x1);
//typ provide some basic types 
//number,string,boolean,null, undefined
const logss = "saurabh ";
console.log("hello " + logss);
function greets(greet) {
    console.log("hello " + greet);
}
greets("saurabh");
//return type to a funtion 
function reply(a, b) {
    return a + b;
}
console.log(reply(2, 3));
//return true or false based on user is 18 + or not
function age(a) {
    if (a < 18) {
        return false;
    }
    else {
        return true;
    }
}
age(21);
//
function delay(fn) {
    setTimeout(fn, 1000);
}
delay(function () {
    console.log("hii there ");
});
//typscipt me type dena bahut jarurui hai like isme fn: pe ()=>void diya huu
function num(fn) {
    setTimeout(fn, 1000);
}
num(function () {
    console.log("abb print krr ");
});
//interface
//appling interface to user object
const newuser = {
    firstname: "saurabh",
    lastname: "tripathi"
};
console.log("hello my name is " + newuser.firstname);
const user = {
    firstname: "saurabh",
    lastname: "tripathi"
};
detialbox(user);
function detialbox(user) {
    console.log("helo my name is " + user.firstname);
}
function islegal(user1) {
    if (user1.a > 18) {
        return true;
    }
    else {
        return false;
    }
}
const user1 = {
    a: 19,
    firstname: "saurabh",
    lastname: "tripathi"
};
islegal(user1);
//todos as input and render then 
const todos = {
    id: 1,
    title: "go to gym",
    description: "i will go to gym everyday"
};
todolist(todos);
function todolist(todos) {
    console.log(" id: " + todos.id);
    console.log("title :" + todos.title);
    console.log("description :" + todos.description);
}
function printid(id) {
    console.log(`id:${id}`);
}
printid(101);
printid('202');
