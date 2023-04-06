/**
 * @jest-environment jsdom
 */
import { displayTasks } from '../modules/display.js';
import { addTask, clearCompletedTasks, toggle } from '../modules/tasks.js';

describe('Test for clearing completed', () => {
  test('Testing if clear removes from array', () => {
    let tasks = [];
    const taskDesc = 'New Task';
    addTask(tasks, taskDesc);

    toggle(tasks, 1);

    tasks = clearCompletedTasks(tasks);

    expect(tasks.length).toBe(0);
  });

  test('Testing if clear updates the dom', () => {
    let tasks = [];
    const taskDesc = 'New Task';
    addTask(tasks, taskDesc);

    document.body.innerHTML = `<div class="displayTasks">
    <li data-id="${tasks[0].id}"><input type="checkbox" class="checkbox ${tasks[0].completed && 'completed'}" id="task-1" ${tasks[0].completed && 'checked'}>
    <input class="description" id="${tasks[0].id}" value="${tasks[0].desc}">
    <button class="del" data-index="${tasks[0].id}">Delete</button></li>
    </div>`;

    toggle(tasks, 1);
    const tasksContainer = document.querySelector('.displayTasks');

    tasks = clearCompletedTasks(tasks);
    displayTasks(tasks, tasksContainer);

    expect(tasksContainer.getElementsByTagName('li').length).toBe(0);
  });
});
