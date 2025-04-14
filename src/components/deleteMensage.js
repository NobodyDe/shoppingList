export default function deleteMensage() {
  const footer = document.querySelector("footer");
  const buttonClose = document.querySelector("#remove-task-btn");

  if (footer) {
    footer.className = "remove-task";
  }

  setTimeout(() => {
    footer.className = "remove-task-hidden";
  }, 3000);

  buttonClose.addEventListener("click", () => {
    footer.setAttribute("class", "remove-task-hidden");
  });
}
