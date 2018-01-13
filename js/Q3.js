function createToDo(){
  var todoitem = document.createElement("tr");
  var todo = document.createElement("td");
  var todoctrl = document.createElement("td");
  // var replaceButton = document.createElement("button");
  // var removeButton = document.createElement("button");
  var input = document.getElementById("task");

  //----- 新增內容 -----
  if(input.value == ""){
    input.value = "空空ㄉ";
  }
  todo.innerHTML = input.value;
  console.log(input.value);
  todoitem.appendChild(todo);



  //----- 新增replaceButton
  var replaceButton = createBtn("R");
  //replaceButton::綁定事件
  replaceButton.onclick = function(){
    var input = document.getElementById("task")
    if(input.value == ""){
      alert("請輸入待辦事項");
      return;
    }
    console.log(input.value);
    this.parentNode.parentNode.firstChild.innerHTML = input.value;
    input.value = ""; //清空輸入
  }
  //replaceButton::將按鈕加入todoitem中
  todoctrl.appendChild(replaceButton);
  todoitem.appendChild(todoctrl);
 

  //----- 新增removeButton
  var removeButton = createBtn("V");
  //removeButton::綁定事件
  removeButton.onclick = function(){
    var check = confirm("是否確定完成？"); 
    if(!check){
      return;
    }
    console.log("remove"+this.parentNode.parentNode.firstChild.innerHTML);

    // tbody>tr>td>div.btn
    // 要指向tbody把tr刪掉 
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  }
  //removeButton::將按鈕加入todoitem中
  todoctrl.appendChild(removeButton);
  todoitem.appendChild(todoctrl);
 
  //清空input
  input.value = "";

  //將todoitem加入todolist中
  var todolist = document.getElementById("todo_body");
  todolist.appendChild(todoitem);

  // // replace button
  // replaceButton.onclick = function(){

  //   input = document.getElementById("task").value;
  //   if(input == ""){
  //     alert("empty!");
  //     return;
  //   }
  //   console.log(input);
  //   this.parentNode.firstChild.innerHTML = input;
  //   document.getElementById("task").value = "";
  // }
  // replaceButton.textContent = "R";
  // todoitem.appendChild(replaceButton);
  // removeButton.onclick = function(){
  //   var check = confirm("是否確定完成？");
  //   if(!check){

  //     return;
  //   }
  //   this.parentNode.parentNode.removeChild(this.parentNode);
  // }
  // removeButton.textContent = "V";
  // todoitem.appendChild(removeButton);

  // var todolist = document.getElementById("todolist");
  // todolist.appendChild(todoitem);
  // document.getElementById("task").value = "";


}


function createBtn(name){
  var btn = document.createElement("div");
  btn.classList.add("btn");
  btn.classList.add("btn-default");
  btn.innerHTML= name;
  return btn;

}