document.addEventListener('DOMContentLoaded', function() {
    // Function to run when the DOM content is loaded

    // Get the soundboard container element
    const soundboard = document.getElementById('soundboard');

    // Array containing paths to audio files
    const audioFiles = [
        "Audio Sampler\\ah-ha.mp3",
        "Audio Sampler\\back-of-the-net.mp3",
        "Audio Sampler\\bangoutoforder.mp3",
        "Audio Sampler\\dan.mp3",
        "Audio Sampler\\emailoftheevening.mp3",
        "Audio Sampler\\hellopartridge.mp3",
        "Audio Sampler\\iateascotchegg.mp3",
        "Audio Sampler\\imconfused.mp3"
    ];

    // Create audio elements and buttons for each audio file
    audioFiles.forEach(audioFile => {
        // Create an audio element
        const audioElement = document.createElement('audio');
        audioElement.src = audioFile;
        audioElement.preload = 'auto';

        // Create a button element
        const button = document.createElement('button');
        button.className = 'audio-button'; // Add a class for styling
        // Set button text
        button.textContent = audioFile.replace('Audio Sampler\\', '').replace('.mp3', '');
        // Add click event listener to play audio when button is clicked
        button.addEventListener('click', () => {
            audioElement.currentTime = 0; // Reset audio to beginning
            audioElement.play(); // Play audio
        });

        // Append button to the soundboard container
        soundboard.appendChild(button);
    });
});