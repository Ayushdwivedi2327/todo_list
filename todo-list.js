let todoList = [];
function renderTodo() {
  let todoListHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let a = todoList[i];
    let name = a.name;
    let date = a.date;
    let html = `
    <div>${name}</div>
    <div>${date}</div>
    
    <button onclick = "
    todoList.splice(${i},1);
    renderTodo()
    ">Delete</button>`; 
    todoListHtml += html;
  }
  // console.log(todoListHtml);
  let b = document.querySelector(".display");
  b.innerHTML = todoListHtml;
} // todo will shown
function addTodo() {
  let ele = document.querySelector(".input");
  let todo = ele.value;
  let date_check = document.querySelector('.date_collector');
    let m  = date_check.value;
  if(todo!='' && m!='')
  {
      todoList.push({
        name:todo,
        date:m
    });
  }
  // console.log(todoList)
  ele.value = "";
  date_check.value = "";
  renderTodo();
}
