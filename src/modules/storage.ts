export const setTasksToStorage = (tasks: any[]): void => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getTasksFromStorage = (): any[] => {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return [];
};
