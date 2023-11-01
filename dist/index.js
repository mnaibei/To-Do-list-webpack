"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = require("./modules/storage");
const display_1 = require("./modules/display");
const tasks_1 = require("./modules/tasks");
require("./style.css");
const tasksContainer = document.querySelector(".displayTasks");
const formField = document.querySelector("#task");
const inputField = document.querySelector(".taskInput");
const clearButton = document.querySelector(".clear-task");
let tasks = (0, storage_1.getTasksFromStorage)();
(0, display_1.displayTasks)(tasks);
formField.addEventListener("submit", (e) => {
    e.preventDefault();
    tasks = (0, tasks_1.addTask)(tasks, inputField.value);
    (0, display_1.displayTasks)(tasks);
    formField.reset();
});
clearButton.addEventListener("click", () => {
    tasks = (0, tasks_1.clearCompletedTasks)(tasks);
    (0, display_1.displayTasks)(tasks);
});
//# sourceMappingURL=index.js.map