const openMenuCrew = document.getElementById("openMenuC");
const closeMenuCrew = document.getElementById("closeMenuD");
const crewMenu = document.querySelector(".crew-section__menu");

openMenuCrew.addEventListener("click", (e) => {
  e.preventDefault();

  crewMenu.style.display = "flex";
});

closeMenuCrew.addEventListener("click", (e) => {
  e.preventDefault();

  crewMenu.style.display = "none";
});
