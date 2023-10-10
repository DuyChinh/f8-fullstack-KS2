import { client } from "./clients.js";
const todoWrapper = document.querySelector(".todo-wrapper");
const todoBlock = document.querySelector(".add-todo-block");
const btnSave = todoBlock.querySelector(".btn-save");
const btnCancel = todoBlock.querySelector(".btn-cancel");
const toDoList = document.querySelector(".to-do-list");
// console.log(todoWrapper);
const btnAddTodo = todoWrapper.querySelector(".add-todo");
const inputAddTodo = todoBlock.querySelector("#add-todo-input");

var todos = [];

btnAddTodo.addEventListener("click", () => {
  todoBlock.style.display = "block";
});

btnCancel.addEventListener("click", () => {
  todoBlock.style.display = "none";
});
var cnt = 0;
const postTask = async(doName) => {
  const { response } = await client.post("/tasks", {
    // "index": cnt,
    "name": doName,
    "completed": false,
  });
}

// postTask();

btnSave.addEventListener("click", (e) => {
  todoBlock.style.display = "none";
  const doName = inputAddTodo.value;
  if(doName) {
    postTask(doName);
    // cnt++;
    renderTodos();
    inputAddTodo.value = "";
  }
});


const renderTodos = async () => {
  const {data: tasks} = await client.get("/tasks");
  // console.log(tasks);
  const html = tasks.map((todo) => {
    return `
        <div class="Todo" data-index="${todo.id}">
            <p data-type="completed" class="${
              todo.completed ? "completed" : ""
            }">${todo.name}</p>
            <div>
              <button data-type="remove" class="btn-delete"><i class="fa-regular fa-trash-can"></i></button>
              <button data-type="update" class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
              <button data-type="completed" class="btn-completed"><i class="fa-solid fa-square-check"></i></button>  
            </div>
        </div>
        `;
    }).join("");
    toDoList.innerHTML = html;
}
const handleRemove = async (id) => {
  const { response } = await client.delete(`/tasks/${id}`);
  renderTodos();
};

const handleDelete = async (id) => {
  const { response } = await client.delete(`/tasks/${id}`);
  // renderTodos();
};

const handleUpdate = async (id, doName) => {
  const { response } = await client.put(`/tasks/${id}`);
  renderTodos();
}

toDoList.addEventListener("click", (e) => {
  var type;
  var todoEl;
  if(e.target.localName == "button") {
    type =  e.target.dataset.type;
    todoEl = e.target.parentElement.parentElement;
  } else if(e.target.localName == "i") {
    type =  e.target.parentElement.dataset.type;
    todoEl = e.target.parentElement.parentElement.parentElement;
  }
  var index = todoEl.dataset.index;
  if(type == "remove") {
    handleRemove(index);
  }

  if(type == "update") {
    todoBlock.style.display = "block";
    console.log(index);
    btnSave.addEventListener("click", (e)=> {
     
      // console.log(index);
      handleDelete(index);
      handleUpdate(index, inputAddTodo.value);
      
    });
    
  }
})