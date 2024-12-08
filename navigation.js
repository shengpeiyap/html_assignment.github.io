// JavaScript to toggle the mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

   // Select the audio and icon elements
const audioControl = document.getElementById("audio-control");
const backgroundAudio = document.getElementById("background-audio");

// Ensure audio plays automatically with muted
backgroundAudio.play().then(() => {
    // On successful autoplay, unmute the audio
    backgroundAudio.muted = false;
}).catch(() => {
    // If autoplay fails, the user needs to click the button to start audio
    console.log("Autoplay was blocked, waiting for user interaction.");
});

// Add event listener for click
audioControl.addEventListener("click", () => {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
        audioControl.classList.remove("muted"); // Show sound icon
        audioControl.classList.add("playing");  // Show playing icon
    } else {
        backgroundAudio.pause();
        audioControl.classList.remove("playing"); // Show muted icon
        audioControl.classList.add("muted");      // Show muted icon
    }
});
