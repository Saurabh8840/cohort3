//schema of creating db 


const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/todoapp")
const todoSchema=mongoose.Schema({
    title:String,
    completed:{
    default:false,
    types:Boolean
    }
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}

//mongodb://localhost:27017/