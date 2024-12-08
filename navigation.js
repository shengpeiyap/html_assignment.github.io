document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Get references to the DOM elements
    const audioControl = document.getElementById('audio-control');
    const audioIcon = document.getElementById('audio-icon');
    const backgroundAudio = document.getElementById('background-audio'); // Reference to background audio

    // Check if elements are found
    if (!audioControl || !audioIcon || !backgroundAudio) {
        console.error('One or more elements are missing: audio-control, audio-icon, background-audio');
        return;
    }

    let isMuted = true; // Initial mute state

    // Set initial audio state
    backgroundAudio.muted = isMuted;

    // Add click event listener to toggle mute
    audioControl.addEventListener('click', () => {
        isMuted = !isMuted;

        // Toggle icon and audio state
        if (isMuted) {
            audioIcon.src = 'img/Mute_Icon.png'; // Update icon to mute
            audioIcon.alt = 'Muted';
            audioControl.setAttribute('aria-label', 'Unmute Audio');
            backgroundAudio.muted = true; // Mute the audio
            console.log('Audio muted');
        } else {
            audioIcon.src = 'img/Speaker_Icon.png'; // Update icon to speaker
            audioIcon.alt = 'Playing';
            audioControl.setAttribute('aria-label', 'Mute Audio');
            backgroundAudio.muted = false; // Unmute the audio
            console.log('Audio playing');
        }
    });
});

