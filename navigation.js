// JavaScript to toggle the mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

// Select the audio and icon elements
const audioControl = document.getElementById("audio-control");
const backgroundAudio = document.getElementById("background-audio");

// Add event listener for click
audioControl.addEventListener("click", () => {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
        audioControl.classList.remove("play"); // Show pause icon
    } else {
        backgroundAudio.pause();
        audioControl.classList.add("play"); // Show play icon
    }
});
