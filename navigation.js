//Navigation for mobile screen function
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

//Audio function
document.addEventListener('DOMContentLoaded', () => {
    const audioControl = document.getElementById('audio-control');
    const audioIcon = document.getElementById('audio-icon');
    const backgroundAudio = document.getElementById('background-audio'); 

    if (!audioControl || !audioIcon || !backgroundAudio) {
        console.error('One or more elements are missing: audio-control, audio-icon, background-audio');
        return;
    }

    let isMuted = true; 

    backgroundAudio.muted = isMuted;

    audioControl.addEventListener('click', () => {
        isMuted = !isMuted;

        if (isMuted) {
            audioIcon.src = 'img/Mute_Icon.png'; 
            audioIcon.alt = 'Muted';
            audioControl.setAttribute('aria-label', 'Unmute Audio');
            backgroundAudio.muted = true; 
            console.log('Audio muted');
        } else {
            audioIcon.src = 'img/Speaker_Icon.png'; 
            audioIcon.alt = 'Playing';
            audioControl.setAttribute('aria-label', 'Mute Audio');
            backgroundAudio.muted = false; 
            console.log('Audio playing');
        }
    });
});

