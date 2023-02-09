function menuToggler() {
  const hideMenu = document.querySelectorAll(".menu-item");
  for (let i = 0; i < hideMenu.length; i++) {
    hideMenu[i].hidden = true;
  }
}
