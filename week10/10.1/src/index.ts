let a:string="heelo saurab";
console.log(a);


//ye hai postgres 

// import { Client } from "pg";

// const client=new Client({
    // connectionString:"postgresql://saurabh:saurabh@localhost:5432/mydatabase?sslmode=disable"
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


import { Client } from "pg";


const client =new Client({
    connectionString:"postgresql://postgres:saurabh@localhost:5432/postgres?sslmode=disable"
}); 

async function connectdb(){
    try{
        await client.connect();
        console.log("connected to postsql ");

    }catch(err){
        console.error("error connecting to postsql:",err);
        process.exit(1);
    }
}

async function createTable(){
    
    const tableQuery=`
           CREATE TABLE users(
              id SERIAL PRIMARY KEY,
              username VARCHAR(50) UNIQUE NOT NULL,
              email VARCHAR(255) UNIQUE NOT NULL,
              password VARCHAR(255) NOT NULL,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
    try{
        await client.query(tableQuery);
        console.log("table user is ready.");
    }catch(err){
        console.log("error creating table:",err);
    }
}



async function insertuser(username:string,email:string,password:string){
    try{
        const insertQuery="INSERT INTO users(username ,email,password) VALUES ($1,$2,$3)";
        const values=[username,email,password];
        const res=await client.query(insertQuery,values);
        console.log('Insertion success:',res);
        
    }catch(err){
        console.error('Error during the insertion:',err);

    }

}


//write a function  getuser that let you fetch data from the datanbase 
//given a email an input 

async function getuser(email:string){

    try {
    const query='SELECT * FROM users WHERE email=$1';
    const values=[email];
    const result=await client.query(query,values);

    if (result.rows.length>0){
        console.log('User found:',result.rows[0]);
        return result.rows[0];

    }else{
        console.log('No user found with the given email.');
        return null;
    }
    }catch (err){
        console.error('Error during fetching user:',err);
        throw err;

    }finally{
        await client.end();//
    }



}

async function main(){
    await connectdb();
    await createTable();
    await insertuser("username5","user5@example.com","user_password");
    await getuser('user5@example.com');
    await client.end();

}
main().catch(console.error);
