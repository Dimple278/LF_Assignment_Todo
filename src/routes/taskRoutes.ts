import express from "express";
import {
  getAllTasks,
  getTask,
  createNewTask,
  updateExistingTask,
  deleteExistingTask,
} from "../controller/taskController";
import {
  validateTaskId,
  validateTaskBody,
} from "../middleware/validationMiddleware";

const router = express.Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", validateTaskId, getTask);
router.post("/tasks", validateTaskBody, createNewTask);
router.put("/tasks/:id", validateTaskId, validateTaskBody, updateExistingTask);
router.delete("/tasks/:id", validateTaskId, deleteExistingTask);

export default router;
