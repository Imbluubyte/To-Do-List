let count = 0;




function deleteTask() {
this.remove();
count = count - 1;
let counterValue = document.getElementById('counterElement');
counterValue.textContent = count;
console.log('Task Completed');
}

function addTask() {
  let inputbox = document.getElementById("textbox");
  let newItem = document.createElement("li");
  newItem.addEventListener("click", deleteTask)
  let newTask = document.createTextNode(inputbox.value);
  newItem.appendChild(newTask);
  let list = document.getElementById("toDoList");
  list.appendChild(newItem);
  count = count + 1;
  let counterValue = document.getElementById('counterElement');
  counterValue.textContent = count;
  console.log('Task Added');
}
