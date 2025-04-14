import deleteMensage from "./deleteMensage.js";
import { removeTaskStorage } from "./saveTasks.js";

export default function deleteButton() {
  document.addEventListener("click", function (event) {
    function getTasksValues() {
      const tasksValids = [...document.querySelectorAll("p")];

      const valuesTaksArray = tasksValids.map((p) => p.textContent.trim());

      return valuesTaksArray;
    }
    //const tasksValids = document.querySelectorAll("p");
    if (event.target.closest("#delete-task")) {
      const listItem = event.target.closest("li");
      if (listItem) {
        listItem.remove();
        deleteMensage();

        console.log(getTasksValues());
        removeTaskStorage(getTasksValues());
      }
    }
  });
}
