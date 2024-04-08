document.addEventListener('DOMContentLoaded', function() {
    // Function to run when the DOM content is loaded

    // Get the soundboard container element
    const soundboard = document.getElementById('soundboard');

    // Array containing paths to audio files
    const audioFiles = [
        "../../Exercises/Audio Sampler/Audio/ah-ha.mp3",
        "../../Exercises/Audio Sampler/Audio/back-of-the-net.mp3",
        "../../Exercises/Audio Sampler/Audio/bangoutoforder.mp3",
        "../../Exercises/Audio Sampler/Audio/dan.mp3",
        "../../Exercises/Audio Sampler/Audio/emailoftheevening.mp3",
        "../../Exercises/Audio Sampler/Audio/hellopartridge.mp3",
        "../../Exercises/Audio Sampler/Audio/iateascotchegg.mp3",
        "../../Exercises/Audio Sampler/Audio/imconfused.mp3"
    ];

    // Create audio elements and buttons for each audio file
    audioFiles.forEach(audioFile => {
        // Extract the file name from the path
        const fileName = audioFile.split('/').pop().split('.').slice(0, -1).join('.');

        // Create an audio element
        const audioElement = document.createElement('audio');
        audioElement.src = audioFile;
        audioElement.preload = 'auto';

        // Create a button element
        const button = document.createElement('button');
        button.className = 'audio-button'; // Add a class for styling
        // Set button text to the file name
        button.textContent = fileName;

        // Add click event listener to play audio when button is clicked
        button.addEventListener('click', () => {
            audioElement.currentTime = 0; // Reset audio to beginning
            audioElement.play(); // Play audio
        });

        // Append button to the soundboard container
        soundboard.appendChild(button);
    });
});