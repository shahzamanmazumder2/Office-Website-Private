// This file runs AFTER header is loaded
function initNavigation() {
  // Mobile menu
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon');

  if (btn && menu && icon) {
    let isOpen = false;
    btn.addEventListener('click', () => {
      isOpen = !isOpen;
      menu.classList.toggle('hidden', !isOpen);
      icon.setAttribute('d', isOpen
        ? 'M6 18L18 6M6 6l12 12'
        : 'M4 6h16M4 12h16M4 18h16'
      );
    });
  }

  // Active page (hash based - same as original)
  const navItems = document.querySelectorAll('.nav-item');
  const current = window.location.hash.slice(1) || 'home';

  navItems.forEach(item => {
    const isActive = item.dataset.page === current;
    item.classList.toggle('active', isActive);
    item.classList.toggle('text-white', isActive);
    item.classList.toggle('text-gray-300', !isActive);
  });

  // Re-attach click handlers
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const page = item.dataset.page;
      navItems.forEach(i => {
        i.classList.toggle('active', i.dataset.page === page);
        i.classList.toggle('text-white', i.dataset.page === page);
        i.classList.toggle('text-gray-300', i.dataset.page !== page);
      });

      if (!menu.classList.contains('hidden')) {
        btn.click();
      }
    });
  });
}

// Load components
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-include]').forEach(el => {
    fetch(el.getAttribute('data-include'))
      .then(r => r.text())
      .then(html => {
        el.outerHTML = html;
        // Re-init navigation after header is inserted
        if (el.id === 'header-placeholder') {
          initNavigation();
        }
      })
      .catch(err => console.error(err));
  });
});