/**
 * @jest-environment jsdom
 */

import { displayTasks } from '../modules/display.js';
import { addTask } from '../modules/tasks.js';
// import addTaskMock from "../__mock__/addTaskMock.js";

// jest.mock("../modules/tasks.js");

describe('add task tests', () => {
  test('addTask adds a task to the tasks array', () => {
    // Create a tasks array and call the addTask function
    const tasks = [];
    const taskDesc = 'New Task';
    addTask(tasks, taskDesc);

    // Check if a new task was added to the tasks array
    expect(tasks).toHaveLength(1);
    expect(tasks[0].desc).toBe(taskDesc);
    expect(tasks[0].completed).toBe(false);
    expect(tasks[0].id).toBe(1);
  });

  test('display on DOM', () => {
    document.body.innerHTML = `<form class="todo" action="" id="task">
    <input type="text" name="task" class="taskInput" placeholder="Add to your list">
    </form>
    <div class="displayTasks">
    </div>`;

    const tasks = [];
    const taskDesc = 'New Task';
    const tasksContainer = document.querySelector('.displayTasks');

    const newTask = document.querySelector('.taskInput');
    newTask.value = taskDesc;

    newTask.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        addTask(tasks, newTask.value);
        displayTasks(tasks, tasksContainer);
      }
    });

    const enter = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      keyCode: 13,
    });
    newTask.dispatchEvent(enter);
    expect(tasksContainer.getElementsByTagName('li').length).toBe(1);
  });
});
