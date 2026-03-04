// ===== DATA =====
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filterType = "all";
const searchInput = document.getElementById("searchInput");

window.onload = function () {
  renderTodos();
};

// ===== ADD TODO =====
function addTodo() {
  
  const input = document.getElementById("todoInput");
  const value = input.value.trim();

  if (value === "") return;

  todos.push({
    id: Date.now(),
    text: value,
    done: false,
  });

  input.value = "";
  saveTodos();
  renderTodos();
}

// ===== SAVE =====
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// ===== RENDER =====
function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  let filteredTodos = todos;

  if (filterType === "active") {
    filteredTodos = todos.filter(todo => !todo.done);
  }

  if (filterType === "done") {
    filteredTodos = todos.filter(todo => todo.done);
  }
  const keyword = searchInput.value.trim().toLowerCase();
  if (keyword)  {
    filteredTodos = filteredTodos.filter(todo => todo.text.toLowerCase().includes(keyword));
  }

  filteredTodos.forEach(todo => {
    list.innerHTML += `
      <li>
        <input
          type="checkbox"
          ${todo.done ? "checked" : ""}
          onclick="toggleTodo(${todo.id})"
        />
        <span style="${todo.done ? "text-decoration: line-through;" : ""}">
          ${todo.text}
        </span>
        <button onclick="deleteTodo(${todo.id})">X</button>
      </li>
    `;
  });
}

// ===== TOGGLE =====
function toggleTodo(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  saveTodos();
  renderTodos();
}

// ===== DELETE =====
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
  renderTodos();
}

// ===== FILTER =====
function setFilter(type) {
  filterType = type;
  renderTodos();
}

// ===== ENTER KEY =====
function handleEnter(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}
// ===== CLEAR COMPLETED =====
function clearComplete() {
  todos = todos.filter(todo => !todo.done);
  saveTodos();
  renderTodos();
}

searchInput.addEventListener("input", renderTodos);
