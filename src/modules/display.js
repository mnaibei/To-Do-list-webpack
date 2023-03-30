import { toggle } from './tasks.js';
import { setTasksToStorage } from './storage.js';

/* eslint-disable import/prefer-default-export */
export const displayTasks = (tasks, container) => {
  container.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" class="checkbox ${task.completed ? 'completed' : ''}" id="task-${task.id}" ${task.completed ? 'checked' : ''}><label for="task-${task.id}">${task.desc}</label>`;
    const liInput = li.querySelector('input[type="checkbox"]');
    liInput.addEventListener('click', () => {
      toggle(tasks, task.id);
      setTasksToStorage(tasks);
      displayTasks(tasks, container);
    });

    const separator = document.createElement('hr');
    li.dataset.id = task.id;
    if (task.completed) {
      li.classList.add('completed');
    }
    container.appendChild(li);
    container.appendChild(separator);
  });
};
