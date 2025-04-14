import createElementTask from "./createElementTask.js";

export function saveTasks(...taskCreated) {
  const storedTasks = localStorage.getItem("tasks");

  const tasksArray = storedTasks ? JSON.parse(storedTasks) : [];

  tasksArray.push(...taskCreated);

  localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

export function* getUncompletTasks() {
  const data = localStorage.getItem("tasks");
  const parsedData = JSON.parse(data);

  try {
    if (Array.isArray(parsedData)) {
      for (const tasksSaveds of parsedData) {
        yield tasksSaveds;
      }
    }
  } catch (error) {
    console.log("error ao converter", error);
  }
}

export function removeTaskStorage(taskValue) {
  // const data = localStorage.getItem("tasks");
  // const parsedData = JSON.parse(data);
  if (!Array.isArray(taskValue)) {
    console.warn("os dados não são um array");
  }

  localStorage.setItem("tasks", JSON.stringify(taskValue));
}
