const menuAPropos = document.querySelector(".menuAPropos");
const menuDeroulant = document.querySelector('.menuDeroulant');

menuDeroulant.addEventListener("mouseover", function () {
  menuAPropos.style.display = "block";
});

menuDeroulant.addEventListener("mouseout", function () {
  menuAPropos.style.display = "none";
});