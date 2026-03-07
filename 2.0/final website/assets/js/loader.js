async function loadComponent(id, file) {

  const res = await fetch(file);
  const html = await res.text();

  document.getElementById(id).innerHTML = html;

  // run scripts after header loads
  if (id === "header") {
    initMobileMenu();
    initNavLinks();
  }

}

loadComponent("header", "assets/components/header.html");
loadComponent("footer", "assets/components/footer.html");