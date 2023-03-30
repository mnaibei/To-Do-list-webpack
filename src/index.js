import { setTasksToStorage, getTasksFromStorage } from './modules/storage.js';
import { clearCompletedTasks, addTask } from './modules/tasks.js';
import { displayTasks } from './modules/display.js';
import './style.css';

// calling DOM
const tasksContainer = document.querySelector('.displayTasks');
const inputField = document.querySelector('.taskInput');
const formField = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-task');
const deleteBtn = document.querySelector('.displayTasks');

// getting tasks from local storage
let tasks = getTasksFromStorage();

// displaying tasks
displayTasks(tasks, tasksContainer);

// adding tasks
formField.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(tasks, inputField.value);
  setTasksToStorage(tasks);
  displayTasks(tasks, tasksContainer);
  inputField.value = '';
});

// clearing completed tasks
clearBtn.addEventListener('click', () => {
  tasks = clearCompletedTasks(tasks);
  setTasksToStorage(tasks);
  displayTasks(tasks, tasksContainer);
});

deleteBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('del')) {
    tasks = tasks.filter((task) => task.id !== Number(e.target.dataset.index));
    tasks = tasks.map((task, id) => ({
      ...task, id: id + 1,
    }));
    setTasksToStorage(tasks);
    displayTasks(tasks, tasksContainer);
  }
});