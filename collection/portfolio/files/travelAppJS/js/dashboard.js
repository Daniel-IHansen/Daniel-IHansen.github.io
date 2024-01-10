// Get Nav element
const navElement = document.querySelector('nav');

// Create dashboard elements
const dashboardNav = document.createElement('div');
dashboardNav.id = 'dashboardNav';

const dashboardTitle = document.createElement('h1');
dashboardTitle.textContent = 'Dashboard';

const dashboardIcon = document.createElement('ion-icon');
dashboardIcon.setAttribute('name', 'hardware-chip-outline');

// Append elements correctly
dashboardNav.appendChild(dashboardIcon);
dashboardNav.appendChild(dashboardTitle);

// Insert dashboardNav before the first child of navElement
navElement.insertBefore(dashboardNav, navElement.firstChild);