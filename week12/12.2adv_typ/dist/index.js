"use strict";
// interface User{
//     name: string;
//     age:number
// }
// function sumofAge(user1:User,user2:User){
//     return user1.age + user2.age;
// }
// const age=sumofAge({name:'Taro',age:20},{name:'Jiro',age:30});
// console.log(age);
// interface User{
//     name:string,
//     age:number
// }
// function agecal(user1:User,user2:User){
//    return user1.age+user2.age;
// }
// const ages=agecal({name:"saurabh",age:21},{name:"annu",age:22});
// interface User{
//     id:string;
//     name:string;
//     age:number;
//     email:string;
//     password:string;
// }
//if there is to many argumnets in function it look ugley so new way if 
// function updateUser(name:string,age:number,password:string){
// }
// interface Updateprops{
//     name:string;
//     age:number;
//     password:string;
// }
// function updateUser(updateprops:Updateprops){
//      //hit the db to update the user 
// }
//here is we update age then value we have to update at two place 
//this is drawback
//there is also a problem with above method so new one is
//
//now let's do something new 
//Pick
//that let u select value 
// interface User{
//     id:string;
//     name:string;
//     age:number;
//     email:string;
//     password:string;
// }
// type UpdateProps=Pick<User,'name'|'age'|'email'>
// function updateUser(updateprops:UpdateProps){
// }
///--------------------------------------------------------------------------------------
//partial
// interface User{
//     name:string;
//     email:string;
//     password:string;
// }
//i want to make things optional either do this or that
// interface User{
//     id:string;
//     name:string;
//     age:number;
//     email:string;
//     password:string;
// }
// //pick
// type UpdateProps=Pick<User,'name'|'age'|'email'>
// //partial
// type UpdatePropsoptional=Partial<UpdateProps>
// function updateUser(updateprops:UpdatePropsoptional){
// }
// updateUser({
//     name: "saurabh",
//     age: 0,
// });
//--------------------------------------------------------------------------------
//Readonly
const user = {
    name: "harkirat",
    age: 21
};
user.name = "asdasad";
console.log(user.name);
const a = [1, 2, 3];
a[0] = 4;
console.log(a[0]);
