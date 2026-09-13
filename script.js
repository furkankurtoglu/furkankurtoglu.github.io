'use strict';
const filters = document.querySelector('.filters');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('[data-category]')];
function selectCategory(category, announce = true) {
  filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
  projects.forEach(project => { project.hidden = project.dataset.category !== category; });
  if (announce) {
    const count = projects.filter(project => !project.hidden).length;
    document.querySelector('#filter-status').textContent = `${count} ${category === 'research' ? 'research projects' : 'applied AI project'} shown.`;
  }
}
if (filters && filterButtons.length && projects.length) {
  filters.hidden = false;
  filterButtons.forEach(button => button.addEventListener('click', () => selectCategory(button.dataset.filter)));
  selectCategory('research', false);
}
document.querySelector('#year').textContent = new Date().getFullYear();
