function leave(){
  window.location.href=("#store");
}

function send(){
  alert("資料已送出，感謝您的合作。");
}

function error(){
  alert("待網站上架功能才會開放，造成您的不便極為抱歉！")
}

window.onscroll = function(){scrolling()}
function scrolling(){
  var nav = document.getElementById("navMain")

  if(document.body.scrollTop > 50|| document.documentElement.scrollTop > 50){
    nav.classList.add("scrolled")
  } else{
    nav.classList.remove("scrolled")
  }
}
