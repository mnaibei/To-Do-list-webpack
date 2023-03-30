// toggle checkbox and return opposite value
export const toggle = (tasks, id) => {
  tasks.forEach((task) => {
    if (task.id === Number(id)) {
      task.completed = !task.completed;
    }
  });
};

// clear completed tasks
export const clearCompletedTasks = (tasks) => tasks.filter((task) => task.completed === false);

// add task to tasks array
export const addTask = (tasks, taskDesc) => {
  const task = {
    desc: taskDesc,
    completed: false,
    id: tasks.length + 1,
  };
  tasks.push(task);
};

// edit task description
export const inlineEditTask = (tasks, id, newDesc) => {
  const taskIndex = tasks.findIndex((task) => task.id === Number(id));
  if (taskIndex !== -1) {
    tasks[taskIndex].desc = newDesc;
  }
};
