import { setTasksToStorage, getTasksFromStorage } from './modules/storage.js';
import { clearCompletedTasks, addTask } from './modules/tasks.js';
import { displayTasks } from './modules/display.js';
import './style.css';

const tasksContainer = document.querySelector('.displayTasks');
const inputField = document.querySelector('.taskInput');
const formField = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-task');

let tasks = getTasksFromStorage();

displayTasks(tasks, tasksContainer);

formField.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(tasks, inputField.value);
  setTasksToStorage(tasks);
  displayTasks(tasks, tasksContainer);
  inputField.value = '';
});

clearBtn.addEventListener('click', () => {
  tasks = clearCompletedTasks(tasks);
  setTasksToStorage(tasks);
  displayTasks(tasks, tasksContainer);
});
