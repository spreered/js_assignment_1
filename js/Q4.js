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
    console.log("task done :"+this.parentNode.parentNode.firstChild.innerHTML);

    //更改todoitem顏色
    this.parentNode.parentNode.firstChild.classList.add("task_done");
    // tbody>tr>td>div.btn
    // 要指向tbody把btn刪掉 
    this.parentNode.innerHTML = "";
  }
  //removeButton::將按鈕加入todoitem中
  todoctrl.appendChild(removeButton);
  todoitem.appendChild(todoctrl);
 
  //清空input
  input.value = "";

  //將todoitem加入todolist中
  var todolist = document.getElementById("todo_body");
  todolist.appendChild(todoitem);

 

}


function createBtn(name){
  var btn = document.createElement("div");
  btn.classList.add("btn");
  btn.classList.add("btn-default");
  btn.innerHTML= name;
  return btn;

}