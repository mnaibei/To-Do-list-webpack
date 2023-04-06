/**
 * @jest-environment jsdom
 */
import { displayTasks } from '../modules/display.js';
import { addTask, editTask } from '../modules/tasks.js';
import { setTasksToStorage, getTasksFromStorage } from '../modules/storage.js';

describe('editing tasks tests', () => {
  test('editTasks updates the array', () => {
    // Create a tasks array and call the addTask function
    let tasks = [];
    const taskDesc = 'New Task';
    addTask(tasks, taskDesc);

    // Edit the task
    tasks = editTask(1, 'New Edit', tasks);

    // Check if a task has been edited
    expect(tasks[0].desc).toBe('New Edit');
    expect(tasks[0].desc).not.toBe('New Task');
  });

  test('editTasks updates the dom', () => {
    let tasks = [];
    const taskDesc = 'New Task';
    addTask(tasks, taskDesc);

    document.body.innerHTML = `<div class="displayTasks">
    <li data-id="${tasks[0].id}"><input type="checkbox" class="checkbox ${tasks[0].completed && 'completed'}" id="task-1" ${tasks[0].completed && 'checked'}>
    <input class="description" id="${tasks[0].id}" value="${tasks[0].desc}">
    <button class="del" data-index="${tasks[0].id}">Delete</button></li>
    </div>`;

    // Edit the task
    tasks = editTask(1, 'New Edit', tasks);
    const tasksContainer = document.querySelector('.displayTasks');
    displayTasks(tasks, tasksContainer);

    const editedTask = document.getElementById(`${tasks[0].id}`);

    expect(editedTask.value).toBe('New Edit');
    expect(editedTask.value).not.toBe('New Task');
  });
});
