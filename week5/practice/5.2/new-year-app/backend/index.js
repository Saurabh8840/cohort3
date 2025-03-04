const express=require("express");
const {createTodo,updateTodo}=require("./type");
const {todo} =require("./db");

const app=express();

app.use(express.json());

//body{
//   TITLE STRING 
//DESCRIPTION STRING
//   }
app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({ 
        msg:"Todo created"
    })
})

app.get("/todos",async function(req,res){
    const todos= await todo.find({});
    console.log(todos);
    res.json({todos});
})

app.put("/completed",async function(req,res){
    const createPayload=req.body;
    const parsedPayload=updateTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(3000);