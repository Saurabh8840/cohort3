


// const express=require('express');
// import mongoose from "mongoose";

// const app=express();


// mongoose.conect()

// //middleware
// app.use(express.json());

// let todos=[];

// app.post('/add-todo',(req,res)=>{
//     const {title,description}=req.body;

//     if (!title || !description){
//         return res.status(400)({message:"title and des required"});

//     }

//     const newTodo={
//         id:todos.length+1,
//         title,
//         description,
//     };

//     todos.push(newTodo);
//     res.status(201).json({message:"Todo added",todo:newTodo})
// });

// app.get("/gettodos",(req,res)=>{
//      res.json(todos);
// })

// app.listen(3000);



// const express =require('express');

// const app=express();

// app.use(express.json())

// let users=[];

// app.post('/users',function(req,res){
//     users.push(req.body);
//     res.send('user added');
// })


// app.post('/profile',function(req,res){
//     users.push(req.body)
//     res.send("pushe kr diya dost ")
// })

// app.post('/view',function(req,res){
//     res.json(users);
// })
// app.get('/users',function(req,res){
//     res.json(users);
// })

// app.delete('/users/:index',function(req,res){
//     users.splice(req.params.index,1);
//     res.send('user deleted ');
// })



// const express=require('express');

// const app=express();

// app.use(express.json())
// const dummyuser={
//     username:"Sanidhya",
//     password:"1234"
// }

// app.post('/login',function(req,res){
//     const {username,password}=req.body;

//     if(username===dummyuser.username && password=== dummyuser.password){
//         res.send("login successful ");
//     }else{
//         res.status(401).send("Invalid username or password");
//     }
// });



// app.listen(3000,function(){
//     console.log('server running..');
// })




// import {z} from "zod";

// const username=z.object({
//     name:z.string(),
//     age:z.number()
// })


// try{
//     const user=username.parse({name:"sanidhya",age:22});
//     console.log("valid user:" ,user);
// }catch(err){
//     console.error("validation error ");
// }


// const userdetail=z.object({
//     name:z.string(),
//     age:z.number()

// })

// try {
//     const users=userdetail.parse({name:"saurabh",age:21});
//     console.log("validation succesfull",users)
// } catch (error) {
//     console.log("validation error")
    
// }


// const login=z.object({
//     email:z.string().email(),
//     password:z.string().min(5)
// })

// try {
//     const logininfo=login.parse({email:"saurabh@gmail.com",
//         password:"123456"
//     })
//     console.log("valid info ",logininfo)
// } catch (error) {
//     console.log("not valid")
// }



// const express=require('express');
// const {z} =require("zod");

// const app=express();


// app.use(express.json());




// app.post('/login',function(req,res){

//     const userinfo=z.object({
//         email:z.string().email(),
//         password:z.string().min(5)
    
//     })
//     try {
//         const validate=userinfo.parse(req.body)
//         res.send("login succesfully")
//     } catch (error) {
//         res.status(400).json(error.errors);
//     }
    
// })

// app.use(function(err,req,res,next){
//     res.send({
//         msg:"internal error"
//     })
// })


// const schema=z.object({
//     tags:z.array(z.string()),
//     role:z.enum(["admin","user","guest"]),
// });

// const input={
//     tags:["node","react"],
//     role:"admin"
// }
// const result=schema.safeParse(input);

// if(result.success){
//     console.log("valid",result.data);
// }else{
//     console.log("invalid",result.error.issues);
// }


// const schema=z.object({
//     tags:z.array(z.string()),
//     mad:z.enum(["admin","laugh","happy"])
// })

// const a={
//     tags:["a","b","c"],
//     mad:"laugh"
// }
// const valida=schema.safeParse(a);
// if(valida.success){
//     console.log("succesfull",valida.data)

// }

// app.listen(3000,function(){
//     console.log("server is running.")
// });





//assignment ek task mila hai dost learnignsme 

// const express= require('express');
// const jwt=require("jsonwebtoken");
// const jwtSecretKey="123456"

// const app=express();

// app.use(express.json());

// const dummyuser=[

//     {username:"saurabh@gmail.com" ,password:"saurabh12",name:"saurabh"},
//     {username:"annu@gmail.com" ,password:"saurabh12",name:"annu"},
//     {username:"akriti@gmail.com" ,password:"saurabh12",name:"akriti"},

//     ];

//     function userExist(username,password){
        
//         for(let i=0;i<dummyuser.length;i++){
//             if(dummyuser[i].username==username && dummyuser[i].password==password){
//                 return true;
//             }
//         }
//         return false;
//     }

// app.post('/signin',function(req,res){
//     const {username,password}=req.body;

//    //credential likh rhe hai
//     if(!userExist(username,password)){
//         return res.status(403).json({
//             msg:"user doesn't exist in our in memeory db",
//         });
//     }

//     const token=jwt.sign({username:username},"jwtSecretKey");

//     return res.json({
//         token,
//     });
// })
// ;
// app.listen(3000,function(){
//     console.log("server is running....")
// })

//-------------------------------------------------------------------------------------------------------------------------------





// const express=require('express');
// //jwt
// const jwt=require("jsonwebtoken");
// const jwtsecretkey="abhiyuday";

// const app=express();


// //middleware

// app.use(express.json());

// //localstorgae

// const dummyuser=[ 
//     {email:"saurabh@gmail.com",password:"saurabh12",name:"saurabh"},
//     {email:"annu@gmail.com",password:"saurabh12",name:"saurabh"},
//     {email:"abhishek@gmail.com",password:"saurabh12",name:"saurabh"}
// ]

// function userexist(email,password){
//      for(let i=0;i<dummyuser.length;i++){
//         if(dummyuser[i].email==email&& dummyuser[i].password==password){
//             return true;
//         }
//      }
//      return false;
// }

// app.post('/sign',function(req,res){
//     const {email,password}=req.body;

//     //checking credentials okk
     
//     if(!userexist(email,password)){
//         return res.status(403).json({
//         msg:"the credentials which you entered might not correct to pls check and type again. Thankyou "
//         });
//     }

//      //jwt token
//      const token=jwt.sign({email:email},jwtsecretkey);
     
//      res.json({
//         token,
//      })
//     }
// )

// app.get('/users',function(req,res){
    
//     //header me token 
//     const token=req.headers.authorization;
//     try{
//         //now match token and secretkey 
//         const decoded=jwt.verify(token,jwtsecretkey);
        
//         //kaunsa user login hai 
//         const useremail=decoded.email;

//         //filter out the current user from dummy user okk 

//         const otherusers=dummyuser.filter(user=>user.email!==useremail);

//         return res.json({
//             user:otherusers,
//         })

//     }catch(err){
//         return res.status(403).json({
//             msg:"Invalid token" 
//         })
//     }
// })

// app.get('/users',function(req,res){

//     const token=req.headers.authorization;

//     try {
//         const decode=jwt.verify(token,jwtsecretkey);

//         const useremail=decode.email;

//         //filter lagana hai dost

//         const otheruser=dummyuser.filter(user=>user.email!==useremail);

//         return res.json({
//             user:otheruser,
//         })
//     } catch (err) {
//         return res.status(403).json({
//             msg:"invalid token"
//         })
//     }


// })

// app.listen(3000,function(){
//     console.log("server is running go and check");
// })


//--------------------------------------------------------------------------------------------------------------------------------------------
//here we learn to connect mongodb with help of mongoose okk 
// const mongoose=require("mongoose");


// //string connect hoo gyi okk 
// mongoose.connect("mongodb+srv://saurabhofficial8840:saurabh@saurabh.my4iaqo.mongodb.net/");


// //mongoose model bna diya okk 
// const User=mongoose.model('Users',{name:String,email:String,password:String});

// //model me kya kya rahega okk dude
// const user=new User({
//     name:'Saurabh Tripathi',
//     email:'saurabh@gmail.com',
//     password:"saurabh12"
// });

// //save to krna padega naa dude yupp
// user.save();




//--------------------creating working mongoose dbb

// const express=require("express");

// const mongoose =require("mongoose");

// const app=express();


// mongoose.connect('mongodb+srv://saurabhofficial8840:saurabh@saurabh.my4iaqo.mongodb.net/')

// const User=mongoose.model('Users',{name:String,email:String,password:String});

// app.post('/signup',async function(req,res){
//     const {name,username,password}=req.body;

//     //verify first is user exist
//     const exsitingUser=await User.findOne({email:username});
//     //CRUD =>create,update,dekete ,read
//     if(exsitingUser){
//         return res.status(400).send("user already exists");
//     }

//     const user= new User({
//         name:name,
//         email:email,
//         password:password
//     });
// })




//--full code mode on final code of today 

//phase-1  here basic route banaya aur validation check hua using local storgae okk -------------------------------


// const express=require('express');

// const app=express();

// app.use(express.json());

// const userdetail=[
//     {name:"saurabh",email:"saurabh@gmail.com",password:"saurabh12"},
//     {name:"annu",email:"annu@gmail.com",password:"saurabh12"}
// ]

// function userexist(email,password){
//     for(let i=0;i<userdetail.length;i++){
//         if(userdetail[i].email==email && userdetail[i].password==password){
//             return true;
//         }
//     }
//     return false;

// }

// app.use('/signup',function(req,res){
//       const {name,email,password}=req.body;

//       const userexist=userdetail(email,password);
//       if(!userexist){
//         res.status(403).json({
//             msg:"user alreday in database found"
//         })
//       }

//       const token=
// })

// app.listen(3000,function(){
//     console.log("abbe generator chalu ho gya hai ...")
// })


//phase-2 abb hmm jwt implement karenge dost  ------------------------------------------

// const express=require('express');
// const jwt=require('jsonwebtoken');
// const jwtSecretKey="this_is_my_key";

// const app=express();

// app.use(express.json());

// const userdetails=[
//     {name:"saurabh",email:"saurabh@gmail.com",password:"saurabh12"},
//     {name:"annu",email:"annu@gmail.com",password:"saurabh12"}
// ]

// function userexist(email,password){
//     for(let i=0;i<userdetails.length;i++){
//         if(userdetails[i].email==email && userdetails[i].password==password){
//             return true;
//         }
//     }
//     return false;

// }

// app.post('/signup',function(req,res){
//       const {name,email,password}=req.body;

//       const userexist=userexist(email,password);
//       if(!userexist){
//         return res.status(403).json({
//             msg:"user not found"
//         })
//       }

//       const token=jwt.sign({email:email},jwtSecretKey);

//       res.json({
//         msg:"login successful",
//         token
//       })
// })

// app.get('/users',function(req,res){

//     const token=req.headers.authorization;

//     try {
//         const userdetail=jwt.verify(token,jwtSecretKey);

//         const useremail=userdetail.email;

//         const otherdetails=userdetails.filter(user=>user.email!==useremail)

//         return res.send({
//             user:otherdetails
//         })
//     } catch (err) {
//         return res.status(403).json({
//             msg:"token is not valid "
//         })
//     }
// })

// app.listen(3000,function(){
//     console.log("abbe generator chalu ho gya hai ...")
// })


//------------------------------
//abb ham mongoose implement karenge okk dost

const mongoose=require("mongoose");
const express=require('express');
const jwt=require('jsonwebtoken');
const jwtSecretKey="this_is_my_key";

const app=express();

mongoose.connect("mongodb+srv://saurabhofficial8840:saurabh@saurabh.my4iaqo.mongodb.net/");


app.use(express.json());


//mogoose model 
const User=mongoose.model("User",{
    name:String,
    email:String,
    password:String
})

//bhai register to kr doo okk i doing it dude for you 

app.post('/register',async function(req,res){
    // const email = req.body.email.toLowerCase();
    const {name,email,password}=req.body;
    
    const user=await User.findOne({email});
    if(user){
        return res.status(403).json({
            msg:"user already exists"
        });
    }

    const newUser=new User({name,email,password});
    await newUser.save();

    res.json({
        msg:"user registered successfully"
    });
})



app.post('/signup',async function(req,res){
      const {name,email,password}=req.body;

      //mongoodb me check hoga abb
      const user=await User.findOne({email,password});
      if(!user){
        return res.status(403).json({
            msg:"Invalid credentails"
        });
      }

      const token=jwt.sign({email:email},jwtSecretKey);

      res.json({
        msg:"login successful",
        token
      })
})




//now here we are querying the user collection in mongodb
//to find a matching user instedad of using dummy data

app.get('/users', async function(req,res){

    const token=req.headers.authorization;

    try {
        const userdetail=jwt.verify(token,jwtSecretKey);

        const useremail=userdetail.email;

        // const otherdetails=userdetails.filter(user=>user.email!==useremail)
        //fetch all user except the logged in user
        const users=await User.find({email:{$ne:useremail}})

        return res.send({
            users:users
        })
    } catch (err) {
        return res.status(403).json({
            msg:"token is not valid "
        })
    }
})

app.listen(3000,function(){
    console.log("abbe generator chalu ho gya hai ...")
})


