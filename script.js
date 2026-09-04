const myButton = document.getElementById("greetingButton");
const outputText = document.getElementById("outputText");

myButton.addEventListener("click", () => {
  outputText.textContent = "Hello, welcome to my first webpage!";
  outputText.style.color = "#27ae60";
  outputText.style.fontWeight = "bold";
});

const tasks = [];
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

function renderTasks() {
  todoList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

function addTask() {
  const taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new task object
  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);

  todoInput.value = "";
  renderTasks();
}
addBtn.addEventListener("click", addTask);
