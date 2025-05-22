(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    menuLinks: document.querySelectorAll(".nav-list-mob a"), // лінки мобільного меню
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  refs.menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
    document.body.classList.toggle("menu-open");
  }

  function closeMenu() {
    refs.menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }
})();
