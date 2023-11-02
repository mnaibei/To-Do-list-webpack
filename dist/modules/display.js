"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayTasks = void 0;
const tasks_1 = require("./tasks");
const storage_1 = require("./storage");
const displayTasks = (tasks) => {
    const taskList = document.querySelector(".displayTasks");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${task.done ? "checked" : ""}/>
        <input class="description" value="${task.task}"></input>
        <button class="del">delete</button>
        `;
        taskList.appendChild(taskItem);
        const checkbox = taskItem.querySelector(".task-checkbox");
        const taskText = taskItem.querySelector(".description");
        const deleteBtn = taskItem.querySelector(".del");
        checkbox.addEventListener("change", () => {
            (0, tasks_1.toggle)(tasks, index);
            (0, storage_1.setTasksToStorage)(tasks);
            (0, exports.displayTasks)(tasks);
        });
        taskText.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                (0, tasks_1.editTask)(tasks, index, taskText.value);
                (0, storage_1.setTasksToStorage)(tasks);
                (0, exports.displayTasks)(tasks);
            }
        });
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            (0, storage_1.setTasksToStorage)(tasks);
            (0, exports.displayTasks)(tasks);
        });
    });
};
exports.displayTasks = displayTasks;
//# sourceMappingURL=display.js.map