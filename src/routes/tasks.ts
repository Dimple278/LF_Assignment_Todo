import express from "express";

const router = express.Router();

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [];
let nextId = 1;

// Create a task
router.post("/tasks", (req, res) => {
  const { title, completed } = req.body;
  const newTask: Task = {
    id: nextId++,
    title,
    completed: completed ?? false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Read all tasks
router.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Read a single task
router.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
});

// Update a task
router.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, completed } = req.body;
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  if (title !== undefined) {
    task.title = title;
  }
  if (completed !== undefined) {
    task.completed = completed;
  }
  res.json(task);
});

// Delete a task
router.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  const deletedTask = tasks.splice(taskIndex, 1);
  res.json(deletedTask[0]);
});

export default router;
