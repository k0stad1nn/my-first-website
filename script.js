const myButton = document.getElementById("greetingButton");
const outputText = document.getElementById("outputText");

myButton.addEventListener("click", () => {
  outputText.textContent = "Hello, welcome to my first webpage!";
  outputText.style.color = "#27ae60"; // Change text color to a shade of green
  outputText.style.fontWeight = "bold"; // Make the text bold
});

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

function addTask() {
  const taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(textSpan);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
  todoInput.value = "";
}

addBtn.addEventListener("click", addTask);
