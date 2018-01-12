const validate_btn = document.getElementById("validate_btn");
const id_input = document.getElementById("id_input");
const message = document.getElementById("message");
const display_gender = document.getElementById("display-gender");
const success = document.getElementById("success");


function validate(){
  var code = id_input.value || "";
  display_gender.classList.remove("male");
  display_gender.classList.remove("female");
  if (code == "") {
    setWarning("請輸入身分證字號！");
  } else if (code.length != 10) {
    setWarning("內容的長度不正確");
  } else if(code.search(/^[A-Z](1|2)\d{8}$/i) == -1){
    //使用regex判別身分證格式
    setWarning("格式不對，請重新輸入");
  }
  else { 
    setSuccess("通過驗證");
    if(code[1]=="1"){
      //判斷是男生
      display_gender.classList.add("male");
      display_gender.classList.remove("female");
    }else{      
      //判斷是女生
      display_gender.classList.add("female");
      display_gender.classList.remove("male");

    }

  }
}

function setWarning(msg){
  message.innerHTML = msg;
  message.classList.remove("success-msg");
  message.classList.add("warning-msg");
}

function setSuccess(msg){
  message.innerHTML= msg;
  message.classList.remove("warning-msg");
  message.classList.add("success-msg");
}