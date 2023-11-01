import { getTasksFromStorage, setTasksToStorage } from "./storage";

export const toggle = (tasks: any[], index: number): void => {
  tasks[index].done = !tasks[index].done;
};

export const clearCompletedTasks = (tasks: any[]): any[] => {
  const updatedlist = tasks.filter((task) => !task.done);
  setTasksToStorage(updatedlist);
  return updatedlist;
};

export const removeTask = (tasks: any[], index: number): any[] => {
  tasks.splice(index, 1);
  setTasksToStorage(tasks);
  return tasks;
};

export const addTask = (tasks: any[], task: string): any[] => {
  tasks.push({ task, done: false });
  setTasksToStorage(tasks);
  return tasks;
};

export const editTask = (tasks: any[], index: number, task: string): any[] => {
  tasks[index].task = task;
  getTasksFromStorage();
  setTasksToStorage(tasks);
  return tasks;
};
