import deleteButton from "./components/deleteButton.js";
import createElementTask from "./components/createElementTask.js";
import { saveTasks, getUncompletTasks } from "./components/saveTasks.js";

function shoppingList() {
  const form = document.querySelector("#add-task");
  const taskCreated = document.querySelector("#name-task");
  const buttonAddItem = document.querySelector("btn-add");
  const listTasks = document.querySelector("ul");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!taskCreated.value) return;

    if (taskCreated.value === "") {
      addTaskInList().focus();
    }
    saveTasks(taskCreated.value);
    //console.log(taskCreated.value);
    addTaskInList(taskCreated.value);

    clearInput();
  });
  for (const tasksUncomplets of getUncompletTasks()) {
    addTaskInList(tasksUncomplets);
  }

  function addTaskInList(taskCreated) {
    listTasks.appendChild(createElementTask(taskCreated));
  }

  function clearInput() {
    taskCreated.value = "";
    taskCreated.focus();
  }
}

shoppingList();
deleteButton();
