// JavaScript to toggle the mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const audioControl = document.getElementById('audio-control');
    const audioIcon = document.getElementById('audio-icon');
    let isMuted = true; // Initial state

    audioControl.addEventListener('click', () => {
        isMuted = !isMuted;

        if (isMuted) {
            audioIcon.src = 'img/Mute_Icon.png'; // Path to the mute icon
            audioIcon.alt = 'Muted';
            audioControl.setAttribute('aria-label', 'Unmute Audio');
        } else {
            audioIcon.src = 'img/Speaker_Icon.png'; // Path to the play icon
            audioIcon.alt = 'Playing';
            audioControl.setAttribute('aria-label', 'Mute Audio');
        }
    });
});
