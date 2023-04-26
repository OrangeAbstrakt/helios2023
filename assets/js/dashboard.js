var taskList = document.getElementById("taskList");
var taskInput = document.getElementById("taskInput");

function addTask() {
  var newTask = document.createElement("div");
  newTask.className = "task-card";
  newTask.innerText = taskInput.value;
  taskList.appendChild(newTask);
  taskInput.value = "";

}
