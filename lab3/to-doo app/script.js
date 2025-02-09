const input = document.querySelector("input");
const addButton = document.getElementById("input-button");
const todos = document.getElementById("todo-list");
const noContent = document.getElementById("no-content");
let todosJson = JSON.parse(localStorage.getItem("todos")) || [];

showTodos();

function getTodoHtml(item, index) {
    let checked = item.status == "done" ? "checked" : "";
    return `
    <li class="todo">
      <label for="${index}">
        <input id="${index}" onclick="check(this)" type="checkbox" ${checked}>
        <p class="${checked}">${item.name}</p>
      </label>
      <button class="delete" data-index="${index}" onclick="remove(this)"><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="80" y1="112" x2="432" y2="112" style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><path d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="256" y1="176" x2="256" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="184" y1="176" x2="192" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="328" y1="176" x2="320" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg></button>
    </li>
  `;
}

function showTodos() {
    if (todosJson.length == 0) {
        todos.innerHTML = "";
        noContent.style.display = 'flex';
    } else {
        todos.innerHTML = todosJson.map(getTodoHtml).join('');
        noContent.style.display = 'none';
    }
}

input.addEventListener("keyup", e => {
    let todo = input.value.trim();
    if (!todo || e.key != "Enter") {
        return;
    }
    addTodo(todo);
});
addButton.addEventListener("click", () => {
    let todo = input.value.trim();
    if (!todo) {
        return
    }
    addTodo(todo);
});

function addTodo(todo) {
    input.value = "";
    todosJson.unshift({ name: todo, status: 'active' });
    localStorage.setItem("todos", JSON.stringify(todosJson));
    showTodos();

}

function check(todo) {
    let todoName = todo.parentElement.lastElementChild;
    if (todo.checked) {
        todoName.classList.add("checked");
        todosJson[todo.id].status = "completed";
    } else {
        todoName.classList.remove("checked");
        todosJson[todo.id].status = "pending";
    }
    localStorage.setItem("todos", JSON.stringify(todosJson));
}

function remove(todo) {
    const index = todo.dataset.index;
    todosJson.splice(index, 1);
    showTodos();
    localStorage.setItem("todos", JSON.stringify(todosJson));
}