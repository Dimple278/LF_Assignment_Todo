import express from "express";
import {
  getAllTasks,
  getTask,
  createNewTask,
  updateExistingTask,
  deleteExistingTask,
} from "../controller/taskController";

const router = express.Router();

router.post("/tasks", createNewTask);
router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTask);
router.put("/tasks/:id", updateExistingTask);
router.delete("/tasks/:id", deleteExistingTask);

export default router;
