// Function to play music and navigate
function playMusicAndNavigate() {
    // Play the audio
    var audio = new Audio('sound.mp3'); // Replace 'your-music-file.mp3' with the path to your music file
    audio.play();

    // Navigate to a new HTML page after a delay (e.g., 3 seconds)
    setTimeout(function() {
        window.location.href = 'index.html'; // Replace 'new-page.html' with the path to your new HTML page
    }, 1); // Change the delay time as needed (in milliseconds)
}

// Add click event listener to the button
document.getElementById('playButton').addEventListener('click', playMusicAndNavigate);
