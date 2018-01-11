var sec;
var setting;
const sec_input = document.getElementById("sec_input");
const btn = document.getElementById("start_btn");
const warning = document.getElementById("warning");
const showbox = document.getElementById("showbox");
var image = document.getElementById("image");

function toggleCount(){

  warning.innerHTML = ""; //清空警告

  // 判斷輸入是不是數字
  if(isNaN(sec_input.value)){
    warning.innerHTML="請輸入數字";
    return;
  }
  //轉換為數字 
  sec = parseInt(sec_input.value);
  console.log(sec);

  //倒數
  btn.setAttribute("disabled","disabled"); 
  showbox.innerHTML = sec;
  setting = setInterval(countDown,1000);
}

function countDown(){
  sec -= 1;
  console.log(sec);
  if(sec <=0){
    showbox.innerHTML = "床上躺平！";  
    image.src = "img/off.jpg";
    console.log(image.src);
    clearInterval(setting);
    btn.removeAttribute("disabled");
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-success");
    btn.innerHTML="重新開始";
    btn.onclick=resetCount;
    return;
  }
  showbox.innerHTML = sec;

}

function resetCount(){
  btn.classList.remove("btn-success");
  btn.classList.add("btn-primary");
  btn.innerHTML="開始倒數";
  sec_input.value = "";
  showbox.innerHTML ="";
  image.src = "img/on.jpg";
}