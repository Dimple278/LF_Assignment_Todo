import { Task } from "../interfaces/taskInterface";
import {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  removeTask,
  generateNextId,
} from "../model/taskModel";

export const fetchTasks = (): Task[] => getAllTasks();

export const fetchTaskById = (id: number): Task | undefined => getTaskById(id);

export const createTask = (title: string, completed: boolean): Task => {
  const newTask: Task = {
    id: generateNextId(),
    title,
    completed,
  };
  return addTask(newTask);
};

export const modifyTask = (
  id: number,
  title?: string,
  completed?: boolean
): Task | null => {
  const task = getTaskById(id);
  if (!task) return null;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  return updateTask(task);
};

export const deleteTask = (id: number): Task | null => removeTask(id);
