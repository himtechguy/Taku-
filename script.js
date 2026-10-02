function toggleMenu() {
  const menu = document.getElementById("menu");

  if (menu) {
    menu.classList.toggle("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#menu a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      const menu = document.getElementById("menu");

      if (menu) {
        menu.classList.remove("active");
      }
    });
  });
});
