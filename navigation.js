// Select the audio and icon elements
const audioControl = document.getElementById("audio-control");
const backgroundAudio = document.getElementById("background-audio");

// Ensure audio plays automatically
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
        audioControl.classList.remove("play"); // Show pause icon
    } else {
        backgroundAudio.pause();
        audioControl.classList.add("play"); // Show play icon
    }
});
