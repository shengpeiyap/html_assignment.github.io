document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Audio control functionality
    const audioControl = document.getElementById("audio-control");
    const backgroundAudio = document.getElementById("background-audio");

    audioControl.addEventListener("click", () => {
        if (backgroundAudio.paused) {
            backgroundAudio.play();
            audioControl.classList.remove("play"); // Show pause icon
            audioControl.setAttribute('aria-label', 'Pause Audio');
        } else {
            backgroundAudio.pause();
            audioControl.classList.add("play"); // Show play icon
            audioControl.setAttribute('aria-label', 'Play Audio');
        }
    });
});
