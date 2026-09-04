'use strict';

const toggleActive = (element) => element.classList.toggle('active');

const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarButton) {
  sidebarButton.addEventListener('click', () => toggleActive(sidebar));
}

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const requestedPage = link.textContent.trim().toLowerCase();

    pages.forEach((page) => {
      page.classList.toggle('active', page.dataset.page === requestedPage);
    });

    navigationLinks.forEach((item) => {
      item.classList.toggle('active', item === link);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
