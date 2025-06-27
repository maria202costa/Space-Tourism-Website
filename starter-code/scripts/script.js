//for the mobile menu:
const openMenu = document.getElementById("openMenuHome");
const closeMenu = document.getElementById("closeMenuHome");
const Menu = document.querySelector(".home-section__menu");

//Open and Close menu on mobile devices:
openMenu.addEventListener("click", (e) => {
  e.preventDefault();

  Menu.style.display = "flex";
});

closeMenu.addEventListener("click", (e) => {
  e.preventDefault();

  Menu.style.display = "none";
});

openMenuDest.addEventListener("click", (e) => {
  e.preventDefault();

  MenuDest.style.display = "flex";
});

closeMenuDest.addEventListener("click", (e) => {
  e.preventDefault();

  MenuDest.style.display = "none";
});
