"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editTask = exports.addTask = exports.removeTask = exports.clearCompletedTasks = exports.toggle = void 0;
const storage_1 = require("./storage");
const toggle = (tasks, index) => {
    tasks[index].done = !tasks[index].done;
};
exports.toggle = toggle;
const clearCompletedTasks = (tasks) => {
    const updatedlist = tasks.filter((task) => !task.done);
    (0, storage_1.setTasksToStorage)(updatedlist);
    return updatedlist;
};
exports.clearCompletedTasks = clearCompletedTasks;
const removeTask = (tasks, index) => {
    tasks.splice(index, 1);
    (0, storage_1.setTasksToStorage)(tasks);
    return tasks;
};
exports.removeTask = removeTask;
const addTask = (tasks, task) => {
    tasks.push({ task, done: false });
    (0, storage_1.setTasksToStorage)(tasks);
    return tasks;
};
exports.addTask = addTask;
const editTask = (tasks, index, task) => {
    tasks[index].task = task;
    (0, storage_1.getTasksFromStorage)();
    (0, storage_1.setTasksToStorage)(tasks);
    return tasks;
};
exports.editTask = editTask;
//# sourceMappingURL=tasks.js.map