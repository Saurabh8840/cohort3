import {Router} from "express";

import {getTodos,createTodo} from "../controllers/todoController"
import { authenticateUser } from "../middleware/authMiddleware";

const router=Router();

router.get("/",authenticateUser,getTodos);
router.post("/",authenticateUser,createTodo);

export default router;
