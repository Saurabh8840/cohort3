"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let a = "heelo saurab";
console.log(a);
//ye hai postgres 
// import { Client } from "pg";
// const client=new Client({
//     connectionString:"postgresql://saurabh:saurabh@localhost:5432/mydatabase?sslmode=disable"
// })
// async function createUserTable() {
//     await client.connect()
//     const result =await client.query(`
//             CREATE TABLE users(
//                  id SERIAL PRIMARY KEY,
//                  username VARCHAR(50) UNIQUE NOT NULL,
//                  email VARCHAR(255) UNIQUE NOT NULL,
//                  password VARCHAR(255) NOT NULL,
//                  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//             );
//         `)
//         console.log(result)
// }
// createUserTable();
//ek pg library import krna hai 
//id banani hai//user name ka database bhi okk
// import { Client } from "pg";//import kr liya 
// //connection string bna liya phir
// const client = new Client({
//     connectionString:"postgresql://saurabh:saurabh@localhost:5432/mydatabase?sslmode=disable"
// });
// //phir fucntion bna liya hu
// async function createuser(){
//     await client.connect();
//     const result= await client.query(`
//         CREATE TABLE users(
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP        
//         );    
//     `)
//     console.log(result)
// }
// async function  inderdata(){
//     const client =new Client({
//         host:'loacalhost',
//         port:5432,
//         database:'postgres',
//         user:'saurabh',
//         password:'saurabh',
//     });
//     try{
//         await client.connect();
//         const insertquery="INSERT INTO users(username,email,password) VALUES "
//     }
// }
// createuser();
//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------
//phirse start karte hai okk
//how to do queries from a node.js app?
// import { Client } from "pg";
// const client= new Client({
//     connectionString:"postgresql://postgres:mysecretpassword@localhost/postgres"
// })
// async function createUserTable(){
//     await client.connect()
//     //const result=await client.query(``)
//     const result=await client.query(`
//         CREATE TABLE users(
//              id SERIAL PRIMARY KEY,
//              username VARCHAR(50) UNIQUE NOT NULL,
//              email VARCHAR(255) UNIQUE NOT NULL,
//              password VARCHAR(255) NOT NULL,
//              created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );    
//     `)
//     console.log(result)
// }
// createUserTable();
//------------------------------------------------------------------------------------------------------------------------------
//creating a simple node.js app
//create a function that let's you insert data into a table .
//make it async make sure client.connect resolves before u do the insert
// import {Client } from 'pg';
// async function insertData(){
//     const client =new Client({
//         connectionString:"postgresql://postgres:mysecretpassword@localhost/postgres"
//     });
//     try{
//         await  client.connect();
//         //sql string:
//         const insertQuery="INSERT INTO users(username,email,password) VALUES('username2','user3@example.com','user_password');";
//         const res=await client.query(insertQuery);
//         console.log("insertion success: ",res);
//     }catch(err){
//         console.log("error during the insertion : ",err);
//     }finally {
//         await client.end();//close the client connection 
//     }
// }
// insertData();
///-----------------------------------------------------------------------------------------
//this method have some p[roblem
//when you expose this fucntionality eventually via http someone can do an sql 
//injection to get access to your data/delete your data.
//more secure way->
//update the code so you don't put user provided fields int the sql string
//you know the sql string?? refer above 
//const insertQuery = 'INSERT INTO example_table(column1, column2) VALUES($1, $2)';
//const res = await client.query(insertQuery, [column1Value, column2Value]);
//const res=insertquery('INSERT INTO user(name,last name) VALUES ($1,$2)');
//const res=await client.query(insertquery,[col1,col2]);
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:saurabh@localhost:5432/postgres?sslmode=disable"
});
function connectdb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("connected to postsql ");
        }
        catch (err) {
            console.error("error connecting to postsql:", err);
            process.exit(1);
        }
    });
}
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const tableQuery = `
           CREATE TABLE users(
              id SERIAL PRIMARY KEY,
              username VARCHAR(50) UNIQUE NOT NULL,
              email VARCHAR(255) UNIQUE NOT NULL,
              password VARCHAR(255) NOT NULL,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        try {
            yield client.query(tableQuery);
            console.log("table user is ready.");
        }
        catch (err) {
            console.log("error creating table:", err);
        }
    });
}
function insertuser(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const insertQuery = "INSERT INTO users(username ,email,password) VALUES ($1,$2,$3)";
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log('Insertion success:', res);
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
    });
}
//write a function  getuser that let you fetch data from the datanbase 
//given a email an input 
function getuser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = 'SELECT * FROM users WHERE email=$1';
            const values = [email];
            const result = yield client.query(query, values);
            if (result.rows.length > 0) {
                console.log('User found:', result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log('No user found with the given email.');
                return null;
            }
        }
        catch (err) {
            console.error('Error during fetching user:', err);
            throw err;
        }
        finally {
            yield client.end(); //
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield connectdb();
        yield createTable();
        yield insertuser("username5", "user5@example.com", "user_password");
        yield getuser('user5@example.com');
        yield client.end();
    });
}
main().catch(console.error);
