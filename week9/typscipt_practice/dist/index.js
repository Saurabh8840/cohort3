"use strict";
//we use tsc -b to build file 
let x = 1;
console.log(x);
//types in typs
let age = 20;
let ages = 20;
let names = "saurabh tripathi";
//let's write a function 
const greeting = (x) => {
    console.log("hello: " + x);
};
greeting("saurabh");
const sum = (value) => {
    return (value.a + value.b + value.c);
};
const myValue = { a: 10, b: 20, c: 10 };
console.log("Total sum" + sum(myValue));
//using boolean
const isLegal = (x) => {
    if (x > 18) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isLegal(22));
//delayed fucntion execution
const delaycall = (fn) => {
    setTimeout(fn, 1000);
};
delaycall(() => {
    console.log("you are dealyed");
});


