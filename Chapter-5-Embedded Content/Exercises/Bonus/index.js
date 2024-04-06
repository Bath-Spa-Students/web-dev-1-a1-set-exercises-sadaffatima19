document.addEventListener('DOMContentLoaded', function() {
    const soundboard = document.getElementById('soundboard');
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

    // Create audio elements for each audio file
    audioFiles.forEach(audioFile => {
        const audioElement = document.createElement('audio');
        audioElement.src = audioFile;
        audioElement.preload = 'auto';

        const button = document.createElement('button');
        button.className = 'audio-button';
        button.textContent = audioFile.replace('Audio Sampler\\', '').replace('.mp3', '');
        button.addEventListener('click', () => {
            audioElement.currentTime = 0;
            audioElement.play();
        });

        // Append button to the soundboard
        soundboard.appendChild(button);
    });
});