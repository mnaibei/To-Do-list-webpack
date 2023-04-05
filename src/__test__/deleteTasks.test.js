/**
 * @jest-environment jsdom
 */

import { addTask, removeIndividualTasks } from "../modules/tasks.js"
import { displayTasks } from "../modules/display.js";


describe('Deleting tasks', () => {
    test('delete', () => {
        let tasks = [];
        const taskDesc = 'New Task';
        addTask(tasks, taskDesc);

        tasks = removeIndividualTasks(tasks, 1);
        
        expect(tasks).toHaveLength(0);
    })

    test('removing from DOM', () => {
        document.body.innerHTML = `
        <div class="displayTasks">
        </div>`;

        let tasks = [];
        const taskDesc = 'New Task';
        addTask(tasks, taskDesc);
        const tasksContainer = document.querySelector(".displayTasks");

        tasks = removeIndividualTasks(tasks, 1);

        displayTasks(tasks, tasksContainer);

        expect(tasksContainer.getElementsByTagName('li').length).toBe(0)
    })
})
