document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Toggle 'active' class when menu button is clicked
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
