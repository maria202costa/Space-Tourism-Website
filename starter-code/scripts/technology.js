const openMenuTech = document.getElementById("openMenuT");
const closeMenuTech = document.getElementById("closeMenuT");
const menuTech = document.querySelector(".tech-section__menu");

openMenuTech.addEventListener("click", (e) => {
  e.preventDefault();

  menuTech.style.display = "flex";
});

closeMenuTech.addEventListener("click", (e) => {
  e.preventDefault();

  menuTech.style.display = "none";
});
