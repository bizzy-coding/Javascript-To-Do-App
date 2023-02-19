const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions

function addTodo(event) {
    event.preventDefault();
    console.log("hello");
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check mark button
    const todoButton = document.createElement("button");
    todoButton.classList.add("unchecked-box");
   
    todoDiv.insertBefore(todoButton, todoDiv.children[0]);
  
    //check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="13.81" height="13.81" viewBox="0 0 13.81 13.81">
      <path id="Cross" d="M13.326,98.283a1.382,1.382,0,0,0-1.954-1.954L6.83,100.876,2.283,96.334A1.382,1.382,0,0,0,.329,98.288l4.546,4.542L.334,107.376a1.382,1.382,0,1,0,1.954,1.954l4.542-4.546,4.546,4.542a1.382,1.382,0,0,0,1.954-1.954L8.784,102.83Z" transform="translate(0.075 -95.925)" fill="#3d3e40"/>
    </svg>
    `;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
  
    //append to list
    todoList.appendChild(todoDiv);
  
    //clear todo input value
  
    todoInput.value = "";
  }
  
  function deleteCheck(e) {
    //console.log(e.target)
    const item = e.target;
    //delete to do
    if (item.classList[0] === "trash-btn") {
      const todo = item.parentElement;
      //animation
      todo.classList.add("fall");
      todo.addEventListener("transitionend", function () {
        todo.remove();
      });
    }
    // check mark
    if (item.classList[0] === "unchecked-box") {
      item.classList.remove("unchecked-box");
      item.classList.toggle("checked-box");
      const todo = item.parentElement;
    }
  }
  