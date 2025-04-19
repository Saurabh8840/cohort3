const express = require('express');
const {z}=require('zod');
const Todo = require('../models/todoModel'); // Import model
const router = express.Router();

const schema=z.object({
    title:z.string(),
    description:z.string()
});


// Create Todo
router.post('/todo', async (req, res) => {
    const parsed=schema.safeParse(req.body);

    if(!parsed.success){
        return res.status(400).json({msg:"Invalid input",error:parsed.error});
    }
    
    const {title,description}=parsed.data;
    const newTodo = new Todo({ title, description });
    await newTodo.save();

    res.json({ msg: "Todo saved successfully" });
    

    
});

// Get All Todos
router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json({ msg: "Todos fetched successfully", todos });
    } catch (err) {
        res.status(403).json({ msg: "Not able to fetch todos" });
    }
});


// Mark Todo as Complete
router.post('/complete', async (req, res) => {
    const parsed=schema.safeParse(req.body);
    
    if (!parsed.success) {
        return res.status(400).json({ msg: "Invalid ID", error: parsed.error });
    }

    const { id } = parsed.data;
    try {
        await Todo.updateOne({ _id: id }, { completed: true });
        res.json({ msg: "Todo marked as completed" });
    } catch (error) {
        res.status(500).json({ msg: "Error updating todo", error: error.message });
    }
});

module.exports = router;