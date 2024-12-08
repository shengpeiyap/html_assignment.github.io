// JavaScript to toggle the mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

document.getElementById("controller-btn").addEventListener("click", function () {
    alert("Controller button clicked!");
});
