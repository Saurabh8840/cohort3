// Yeh file todos (tasks) ko manage karne ke liye hai.
// Har user sirf apne todos dekh sake aur naye todos add kar sake.

// 📌 Purpose of this File
// Users ke todos ko retrieve (fetch) karna
// Naya todo create karna
// Sirf authenticated users ke liye access allow karna
// Database me CRUD operations handle karna (using Prisma)


//importin modules
import { Request, Response } from "express";
import prisma from "../config/db";

// Define Custom Request type
interface CustomRequest extends Request {
  user?: { userId: string };
}

// Get todos
export const getTodos = async (req: CustomRequest, res: Response) :Promise<void> => {
  if (!req.user) {
    res.status(401).json({ success: false, message: "Unauthorized" });
    return;
  }

  const todos = await prisma.todo.findMany({
    where: { userId: req.user.userId }
  });

  res.json({ success: true, data: todos });
  return;
};

// Create todo
export const createTodo = async (req: CustomRequest, res: Response):Promise<void> => {
  if (!req.user) {
    res.status(401).json({ success: false, message: "Unauthorized" });
    return;
  }

  const { title } = req.body;
  const newTodo = await prisma.todo.create({
    data: { title, completed: false, userId: req.user.userId }
  });

  res.status(201).json({ success: true, data: newTodo });
  return;
};
