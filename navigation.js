// Toggle the menu visibility when clicking the hamburger icon
document.getElementById('mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
