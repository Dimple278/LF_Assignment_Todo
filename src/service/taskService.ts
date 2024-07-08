import { Task } from "../interfaces/taskInterface";
import {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  removeTask,
  generateNextId,
} from "../model/taskModel";
import { pick } from "lodash";

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
  updates: Partial<Omit<Task, "id">>
): Task | null => {
  const task = getTaskById(id);
  if (!task) return null;

  const allowedUpdates = pick(updates, ["title", "completed"]);
  Object.assign(task, allowedUpdates);

  return updateTask(task);
};

export const deleteTask = (id: number): Task | null => removeTask(id);
