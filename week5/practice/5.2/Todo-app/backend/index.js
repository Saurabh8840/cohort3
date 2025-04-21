

// //route banate hai okk

// const { toHaveDescription } = require('@testing-library/jest-dom/matchers');
// const  express = require('express');
// const mongoose=require("mongoose");

// mongoose.connect("mongodb+srv://saurabhofficial8840:saurabh@saurabh.my4iaqo.mongodb.net/");



// const app=express();

// app.use(express.json());

// const todo=mongoose.model("todo",{
//     title:String,
//     description:String,
//     completed:{type:Boolean,default:false}
// })

// app.post('/todo',async function(req,res){
//     const {title,description}=req.body;

//     const newtodo=new todo({title,description});
//     await newtodo.save();

//     // res.send({
//     //     msg:"todo saved successfully "
//     // })
//     res.json({
//         msg:"todo saved successfully "
//     })
// })

// app.get('/todos',async function(req,res){

//     try {
        
//         const todos=await todo.find();

//         return res.json({
//             msg:"todos  fetch succesfully",
//             todos:todos
//         })
//     } catch (err) {
//         return res.status(403).json({
//             msg:"not able to fetch todos "
//         })
//     }

// })

// app.post('/complete',async function(req,res){

//     const {id}=req.body;
//     try {
//         await todo.updateOne({_id:id},{completed:true});
//         res.json({msg:"Todo marked as completed"});
//     } catch (error) {
//         res.status(500).json({msg:"error updating todo",
//             error:error.message
//         });
//     }

// });

// app.listen(3000,function(){
//     console.log("abb generator chalu ho gya .....")
// })


//-----------------------------------------------------------------------------

const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors");
const todoRoutes = require('./routes/todoRoutes'); // Import routes

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

require('./db'); // Import the DB connection

app.use(todoRoutes); // Use the routes

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});




//index.js --> express ,
// //->route ke liye  
// route folder usme -->  (todoroutes.js)
// uske baad db me 
// db me connection string
//db model ke liye db model 
//export krna hai kya Todo jo model bana hai 
//todoroutes.js me import 
//Todo=require('../models/todoModel');
//app ki jagah router
//export router
