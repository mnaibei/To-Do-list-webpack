import './style.css';
// tasks array
let tasks = [
];

// local storage
const setTasksToStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
const getTasksFromStorage = () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
};

// remove task
/* eslint-disable no-use-before-define */
const toggle = (id) => {
  tasks.forEach((task) => {
    if (task.id === Number(id)) {
      task.completed = !task.completed;
    }
  });
  setTasksToStorage();
  displayTasks();
};

// display tasks
const displayTasks = () => {
  document.querySelector('.displayTasks').innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" class="checkbox ${task.completed ? 'completed' : ''}" id="task-${task.id}" ${task.completed ? 'checked' : ''}><label for="task-${task.id}">${task.desc}</label>`;
    const liInput = li.querySelector('input[type="checkbox"]');
    liInput.addEventListener('click', () => {
      toggle(task.id);
    });
    const separator = document.createElement('hr');
    li.dataset.id = task.id;
    if (task.completed) {
      li.classList.add('completed');
    }
    document.querySelector('.displayTasks').appendChild(li);
    document.querySelector('.displayTasks').appendChild(separator);
  });
};

// add task
const addTask = () => {
  const inputField = document.querySelector('.taskInput');
  const formField = document.querySelector('#task');
  formField.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = {
      id: tasks.length + 1,
      desc: inputField.value,
      completed: false,
    };
    tasks.push(task);
    setTasksToStorage();
    displayTasks();
    inputField.value = '';
  });
};

// clear complete tasks
const clearTasks = () => {
  tasks = tasks.filter((task) => task.completed === false);
};

const clearBtn = document.querySelector('.clear-task');
clearBtn.addEventListener('click', () => {
  clearTasks();
  setTasksToStorage();
  displayTasks();
});

window.onload = () => {
  getTasksFromStorage();
  displayTasks();
  setTasksToStorage();
  addTask();
};