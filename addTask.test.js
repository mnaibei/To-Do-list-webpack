/**
 * @jest-environment jsdom
*/

import { addTask } from "./src/modules/tasks.js";

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
  