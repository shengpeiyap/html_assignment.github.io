document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Toggle 'active' class for mobile navigation
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Reset navigation for desktop view
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active'); // Ensure menu closes
            navLinks.style.display = 'flex'; // Ensure links are visible
        } else {
            navLinks.style.display = ''; // Revert to CSS-defined behavior
        }
    });
});
