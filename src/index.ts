import { getTasksFromStorage } from "./modules/storage";
import { displayTasks } from "./modules/display";
import { clearCompletedTasks, addTask } from "./modules/tasks";
import "./style.css";

const formField = document.querySelector("#task") as HTMLFormElement;
const inputField = document.querySelector(".taskInput") as HTMLInputElement;
const clearButton = document.querySelector(".clear-task") as HTMLButtonElement;

let tasks = getTasksFromStorage();

displayTasks(tasks);

formField.addEventListener("submit", (e) => {
  e.preventDefault();
  tasks = addTask(tasks, inputField.value);
  displayTasks(tasks);
  formField.reset();
});

clearButton.addEventListener("click", () => {
  tasks = clearCompletedTasks(tasks);
  displayTasks(tasks);
});
