function displaytask() {
  let taskList = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  let displayList = ``;
  for (let task of taskList) {
    displayList += ` <div class="row">
    <div class="col-6 m-auto">
        <div class="card" >
            <div class="card-body bg-secondary">
                <ul style="list-style:none" id="task-list-ul">
                    <li>${task} <i class="fa-solid fa-square-xmark float-end mt-1"></i></li>
                </ul>
            </div>
        </div>
    </div>
    </div>`;
  }
  document.getElementById("task-body").innerHTML = displayList;
}
displaytask();
let addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let taskInputtag = document.getElementById("task-input");
  let task = taskInputtag.value.trim();
  let taskList = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  taskList.unshift(task);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  displaytask();
});
//delete task

let taskTag = document.getElementById("task-body");
taskTag.addEventListener("click", function (event) {
  let targetEl = event.target;
  if (taskTag.classList.contains("fa-square-xmark")) {
    let actualEl = targetEl.parentElement;
    let selectedText = actualEl.innerText;
    let taskList = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
    taskList = taskList.filter((task) => {
      return task.trim() !== selectedText.trim();
    });
    localStorage.setItem("tasks", JSON.stringify(taskList));
    displaytask();
  }
});
