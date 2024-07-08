import { Task } from "../interfaces/taskInterface";

let tasks: Task[] = [];
let nextId = 1;

export const getAllTasks = (): Task[] => tasks;

export const getTaskById = (id: number): Task | undefined =>
  tasks.find((task) => task.id === id);

export const addTask = (task: Task): Task => {
  tasks.push(task);
  return task;
};

export const updateTask = (task: Task): Task | null => {
  const index = tasks.findIndex((t) => t.id === task.id);
  if (index !== -1) {
    tasks[index] = task;
    return task;
  }
  return null;
};

export const removeTask = (id: number): Task | null => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return null;
  const [deletedTask] = tasks.splice(index, 1);
  return deletedTask;
};

export const generateNextId = (): number => nextId++;
