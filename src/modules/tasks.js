import { setTasksToStorage, getTasksFromStorage } from './storage.js';
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

// remove individual tasks
export const removeIndividualTasks = (tasks, index) => {
  tasks = tasks.filter((task) => task.id !== Number(index)).map((task, id) => ({
    ...task, id: id + 1,
  }));
  return tasks;
};

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
export const editTask = (e) => {
  let tasks = getTasksFromStorage();
  tasks = tasks.map((task, i) => {
    const temp = {};
    temp.desc = e.target.id - 1 === i ? e.target.value : task.desc;
    temp.completed = task.completed;
    temp.id = task.id;
    return temp;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
