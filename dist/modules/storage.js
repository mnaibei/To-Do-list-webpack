"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasksFromStorage = exports.setTasksToStorage = void 0;
const setTasksToStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
exports.setTasksToStorage = setTasksToStorage;
const getTasksFromStorage = () => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        return JSON.parse(storedTasks);
    }
    return [];
};
exports.getTasksFromStorage = getTasksFromStorage;
//# sourceMappingURL=storage.js.map