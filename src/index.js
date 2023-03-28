import './style.css';

const tasks = [
  {
    id: 1,
    desc: 'Wash the dishes',
    completed: false,
  },
  {
    id: 2,
    desc: 'Do the laundry',
    completed: false,
  },
  {
    id: 3,
    desc: 'Take out the trash',
    completed: false,
  },
];

const displayTasks = () => {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" class="checkbox ${task.completed ? 'completed' : ''}" id="task-${task.id}" ${task.completed ? 'checked' : ''}><label for="task-${task.id}">${task.desc}</label>`;
    const separator = document.createElement('hr');
    li.dataset.id = task.id;
    if (task.completed) {
      li.classList.add('completed');
    }
    document.querySelector('.displayTasks').appendChild(li);
    document.querySelector('.displayTasks').appendChild(separator);
  });
};

window.addEventListener('load', () => {
  displayTasks();
});