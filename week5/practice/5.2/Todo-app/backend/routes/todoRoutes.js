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

    res.status(201).json(newTodo);
    

    
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
    const idSchema = z.object({ id: z.string() });
    const parsed = idSchema.safeParse(req.body);

    if (!parsed.success) {
        return res.status(400).json({ msg: "Invalid ID", error: parsed.error });
    }

    const { id } = parsed.data;
    try {
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        // Toggle the completion status
        const newStatus = !todo.completed;

        // Update the task in the database
        await Todo.updateOne({ _id: id }, { completed: newStatus });

        // Send the updated completion status in the response
        res.json({ msg: "Todo completion status toggled", completed: newStatus });
    } catch (error) {
        res.status(500).json({ msg: "Error updating todo", error: error.message });
    }
});



router.get('/todos/completed', async (req, res) => {
    const todos = await Todo.find({ completed: true }); // assuming 'completed' is a boolean
    res.json({ msg: "Todos fetched successfully", todos });

  });
  

module.exports = router;