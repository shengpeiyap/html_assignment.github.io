// JavaScript to toggle the mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

// Select the audio, control div, and icon image
const audioControl = document.getElementById("audio-control");
const audioIcon = document.getElementById("audio-icon");
const backgroundAudio = document.getElementById("background-audio");

// Ensure the audio plays automatically if the browser permits
backgroundAudio.play().then(() => {
    backgroundAudio.muted = false; // Unmute audio
}).catch(() => {
    console.log("Autoplay blocked, waiting for user interaction.");
});

// Add click event listener to toggle play/pause
audioControl.addEventListener("click", () => {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
        audioIcon.src = "img/Speaker_Icon.png"; // Change to speaker icon
        audioIcon.alt = "Playing Audio";    // Update alt text
    } else {
        backgroundAudio.pause();
        audioIcon.src = "img/Mute_Icon.png";    // Change to mute icon
        audioIcon.alt = "Muted Audio";     // Update alt text
    }
});
