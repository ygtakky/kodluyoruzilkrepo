$(document).ready(function () {
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
  const data = JSON.parse(localStorage.getItem("tasks"));
  loadTasks(data);
});

const list = document.querySelector("#list");

let tasksArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

function loadTasks(data) {
  data.forEach((task) => {
    liMaker(task);
  });
}

function liMaker(val) {
  const li = `<li onclick="completed(event);">${val}<span class="close" onclick="deleteElement(event);">&#10005</span></li>`;
  if (list.innerHTML == "") {
    list.innerHTML = li;
  } else {
    list.innerHTML += li;
  }
}

function newElement() {
  const task = $("#task");
  let taskVal = task.val().trim();
  if (taskVal === "") {
    alert("Yapılacak boş olamaz!");
    return 0;
  }
  tasksArray.push(taskVal);
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
  liMaker(taskVal);
  taskVal = "";
}

function deleteElement(event) {
  const task = event.target.parentElement.innerText.slice(0, -1);
  tasksArray.pop(task);
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
  event.target.parentElement.remove();
}

function completed(event) {
  let element = event.target;
  element.classList.toggle("checked");
}