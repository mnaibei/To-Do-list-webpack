import { addTask, toggle } from '../modules/tasks';

describe('Tests for completing tasks', () => {
  test('Check if toogle works', () => {
    const tasks = [];
    const taskDesc = 'New Task';
    addTask(tasks, taskDesc);

    toggle(tasks, 1);

    expect(tasks[0].completed).toBe(true);
  });
});