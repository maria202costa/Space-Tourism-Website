//for the destinations pages:
const openMenuDest = document.getElementById("openMenuD");
const closeMenuDest = document.getElementById("closeMenuD");
const MenuDest = document.querySelector(".destination-section__menu");

openMenuDest.addEventListener("click", (e) => {
  e.preventDefault();

  MenuDest.style.display = "flex";
});

closeMenuDest.addEventListener("click", (e) => {
  e.preventDefault();

  MenuDest.style.display = "none";
});
