// Get elements
const audio = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

// Set initial icon to "pause" since music auto-plays
musicBtn.src = "pause.png";

// Play/Pause toggle function
musicBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        musicBtn.src = "pause.png"; // Show pause icon when music is playing
    } else {
        audio.pause();
        musicBtn.src = "play.png"; // Show play icon when music is paused
    }
});
