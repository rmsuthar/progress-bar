function findActiveEl(el) {
  const El = document.querySelector(el);

  const actEl =
    El.querySelector(".active") &&
    El.querySelector(".active").getBoundingClientRect();
  if (actEl)
    El.style.background =
      "linear-gradient(#000, #000) left/" +
      actEl.x +
      "px 1px no-repeat, linear-gradient(#c8c8c8, #c8c8c8) left/100% 1px no-repeat";
}

findActiveEl(".progress");

function isFst(){
  const El = document.querySelector(".progress li.active");
  return !(El.previousElementSibling);
}
function isLst(){
  const El = document.querySelector(".progress li.active");
  return !(El.nextElementSibling || El.classList.contains('end'));
}
 
document.getElementById("nxt").addEventListener("click",nextNav,true)
document.getElementById("prev").addEventListener("click",prevNav,true)
function nextNav(){
  const El = document.querySelector(".progress li.active");
  if(!isLst()){
    El.nextElementSibling.classList.add("active");
    El.classList.remove("active");    
  }else{
    El.classList.add("completed");  
  }
}
function prevNav(){
  const El = document.querySelector(".progress li.active");
  if(!isFst()){
    El.previousElementSibling.classList.add("active");
    El.classList.remove("active");
    El.classList.remove("completed");
  }  
}

