//função para criar elementos com atributos e filhos
function createElement(tag, attributes = {}, children = []) {
  const element = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) =>
    element.setAttribute(key, value)
  );

  children.forEach((child) => element.appendChild(child));

  return element;
}

export default function createElementTask(taskCreated) {
  const checkbox = createElement("input", {
    id: "checkbox",
    type: "checkbox",
  });
  const taskContent = createElement("p", {}, [
    document.createTextNode(taskCreated),
  ]);
  const deleteIcon = createElement("ion-icon", { name: "trash-outline" });
  const buttunDelete = createElement("button", { id: "delete-task" }, [
    deleteIcon,
  ]);
  const label = createElement("label", { id: "task" }, [checkbox, taskContent]);

  return createElement("li", {}, [label, buttunDelete]);
}
