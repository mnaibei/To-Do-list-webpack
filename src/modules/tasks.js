export const toggle = (tasks, id) => {
  tasks.forEach((task) => {
    if (task.id === Number(id)) {
      task.completed = !task.completed;
    }
  });
};

export const clearCompletedTasks = (tasks) => tasks.filter((task) => task.completed === false);

export const addTask = (tasks, taskDesc) => {
  const task = {
    desc: taskDesc,
    completed: false,
    id: tasks.length + 1,
  };
  tasks.push(task);
};

export const inlineEditTask = (tasks, id, newDesc) => {
  const taskIndex = tasks.findIndex((task) => task.id === Number(id));
  if (taskIndex !== -1) {
    tasks[taskIndex].desc = newDesc;
  }
};
