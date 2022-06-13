function findActiveEl(el) {
  var El = document.querySelector(el);

  const actEl =
    El.querySelector(".active") &&
    El.querySelector(".active").getBoundingClientRect();
  if (actEl)
    El.style.background =
      "linear-gradient(#000, #000) left/" +
      actEl.x +
      "px 1px no-repeat, linear-gradient(#ccc, #ccc) left/100% 1px no-repeat";
}

findActiveEl(".progress");
