/**
 * @jest-environment jsdom
 */
import { displayTasks } from '../modules/display.js';
import { addTask, editTask } from '../modules/tasks.js';
import { setTasksToStorage, getTasksFromStorage } from '../modules/storage.js';

test('editing tasks', () => {
    document.body.innerHTML = `<input class="description" id="1" value="Task 1"></input>`;

    const newTask = document.querySelector('.description');

    newTask.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
          editTask( e );
          setTasksToStorage(newTask.value)
        }
      });

      newTask.value = "New Task";

    //   console.log(task)

      const enter = new KeyboardEvent('keydown', {
        keyCode: 13,
      });
      newTask.dispatchEvent(enter);

    let tasks = getTasksFromStorage(newTask.value)
    console.log(tasks)

    expect(tasks).toBe(newTask.value)
})



  