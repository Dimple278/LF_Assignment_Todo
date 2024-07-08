import { Request, Response } from "express";
import {
  fetchTasks,
  fetchTaskById,
  createTask,
  modifyTask,
  deleteTask,
} from "../service/taskService";

export const getAllTasks = (req: Request, res: Response): void => {
  res.json(fetchTasks());
};

export const getTask = (req: Request, res: Response): void => {
  const taskId = parseInt(req.params.id);
  const task = fetchTaskById(taskId);
  if (!task) {
    res.status(404).json({ message: "Task not found" });
  } else {
    res.json(task);
  }
};

export const createNewTask = (req: Request, res: Response): void => {
  const { title, completed } = req.body;
  const newTask = createTask(title, completed ?? false);
  res.status(201).json(newTask);
};

export const updateExistingTask = (req: Request, res: Response): void => {
  const taskId = parseInt(req.params.id);
  const { title, completed } = req.body;
  const updatedTask = modifyTask(taskId, title, completed);
  if (!updatedTask) {
    res.status(404).json({ message: "Task not found" });
  } else {
    res.json(updatedTask);
  }
};

export const deleteExistingTask = (req: Request, res: Response): void => {
  const taskId = parseInt(req.params.id);
  const deletedTask = deleteTask(taskId);
  if (!deletedTask) {
    res.status(404).json({ message: "Task not found" });
  } else {
    res.json(deletedTask);
  }
};
