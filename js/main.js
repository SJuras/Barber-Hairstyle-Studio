// menu open/close
var menuBtn = document.getElementById("menu-icon");
var sideNav = document.getElementById("sideNav");
var menuIcon = document.getElementById("menu-icon");

sideNav.style.right = "-250px";

menuBtn.onclick = function(){
  if(sideNav.style.right == "-250px"){
    sideNav.style.right = "0";
    menuIcon.src = "img/close.png";
  }else{
    sideNav.style.right = "-250px";
    menuIcon.src = "img/menu.png";
  }
}
