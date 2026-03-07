function initMobileMenu() {

  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");

  let isMenuOpen = false;

  if (!mobileMenuBtn) return;

  mobileMenuBtn.addEventListener("click", () => {

    isMenuOpen = !isMenuOpen;

    mobileMenu.classList.toggle("hidden");

    menuIcon.setAttribute(
      "d",
      isMenuOpen
        ? "M6 18L18 6M6 6l12 12"
        : "M4 6h16M4 12h16M4 18h16"
    );

  });

}


function initNavLinks(){

  const navItems = document.querySelectorAll(".nav-item");

  function setActivePage(page) {

    navItems.forEach(item => {

      if (item.dataset.page === page) {

        item.classList.add("active","text-white");
        item.classList.remove("text-gray-300");

      } else {

        item.classList.remove("active","text-white");
        item.classList.add("text-gray-300");

      }

    });

  }

  const page = window.location.hash.slice(1) || "home";

  setActivePage(page);

}