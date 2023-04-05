/* eslint-disable */
export default addTask = (desc) => {
  document.body.innerHTML = `<form class="todo" action="" id="task">
    <input type="text" name="task" class="taskInput" placeholder="Add to your list">
  </form>
  <div class="displayTasks">
  </div>`;

  const newTask = document.querySelector(".taskInput");
  newTask.value = desc;

  const enter = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    keyCode: 13,
  });
  newTask.dispatchEvent(enter);

};
