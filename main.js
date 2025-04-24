const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links .nav-item');

// open and close menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// close when a nav item is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
    });
});

// close when clicking outside the nav
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
    }
});