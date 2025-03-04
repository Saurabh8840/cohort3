import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import todoRoutes from "./routes/todoRoutes";
import cors  from "cors";

dotenv.config();
// console.log("Environment variables:", process.env);


const app=express();
app.use(cors());
app.use(express.json());


app.use("/api/auth",authRoutes);
app.use("/api/todos",todoRoutes);

const PORT = process.env.PORT||5000;
// console.log("PORT from .env:", process.env.PORT);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });