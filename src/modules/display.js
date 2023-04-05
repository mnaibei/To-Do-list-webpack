import { toggle } from './tasks.js';
import { setTasksToStorage, getTasksFromStorage } from './storage.js';

/* eslint-disable import/prefer-default-export */
export const displayTasks = (tasks, container) => {
  container.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" class="checkbox ${task.completed ? 'completed' : ''}" id="task-${task.id}" ${task.completed ? 'checked' : ''}>
    <input class="description" id="${task.id}" value="${task.desc}"></input>
    <button class="del" data-index="${task.id}">Delete</button>`;

    // checkbox listener and toggler
    const liInput = li.querySelector('input[type="checkbox"]');
    liInput.addEventListener('click', () => {
      toggle(tasks, task.id);
      setTasksToStorage(tasks);
      displayTasks(tasks, container);
    });

    // edit task description
    const liLabel = li.querySelector('.description');
    liLabel.addEventListener('change', (e) => {
      let tasks = getTasksFromStorage();
      tasks = tasks.map((task, i) => {
        const temp = {};
        temp.desc = e.target.id - 1 === i ? e.target.value : task.desc;
        temp.completed = task.completed;
        temp.id = task.id;
        return temp;
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    const separator = document.createElement('hr');

    // add 'completed' to task li marked complete
    li.dataset.id = task.id;
    if (task.completed) {
      li.classList.add('completed');
    }

    // append to DOM
    container.appendChild(li);
    container.appendChild(separator);
  });
};
