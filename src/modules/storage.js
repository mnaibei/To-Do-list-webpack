export const setTasksToStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const getTasksFromStorage = () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return [];
};
