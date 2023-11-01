import { toggle, editTask } from "./tasks";
import { setTasksToStorage } from "./storage";

export const displayTasks = (tasks: any[]): void => {
  const taskList = document.querySelector(".displayTasks") as HTMLUListElement;
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${
          task.done ? "checked" : ""
        }/>
        <input class="description" value="${task.task}"></input>
        <button class="del">delete</button>
        `;

    taskList.appendChild(taskItem);
    const checkbox = taskItem.querySelector(
      ".task-checkbox"
    ) as HTMLInputElement;

    const taskText = taskItem.querySelector(".description") as HTMLInputElement;

    const deleteBtn = taskItem.querySelector(".del") as HTMLButtonElement;
    checkbox.addEventListener("change", () => {
      toggle(tasks, index);
      setTasksToStorage(tasks);
      displayTasks(tasks);
    });

    taskText.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        console.log(taskText.value);
        editTask(tasks, index, taskText.value as string);
        setTasksToStorage(tasks);
        displayTasks(tasks);
      }
    });

    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      setTasksToStorage(tasks);
      displayTasks(tasks);
    });
  });
};
