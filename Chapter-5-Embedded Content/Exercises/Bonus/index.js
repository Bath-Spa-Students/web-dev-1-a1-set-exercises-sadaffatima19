document.addEventListener('DOMContentLoaded', function() {
    const soundboard = document.getElementById('soundboard');
    const audioFiles = ["C:\Users\marwa\Documents\GitHub\web-dev-1-a1-set-exercises-sadaffatima19\Chapter-5-Embedded Content\Exercises\Audio Sampler\Audio\ah-ha.mp3",
    "C:\Users\marwa\Documents\GitHub\web-dev-1-a1-set-exercises-sadaffatima19\Chapter-5-Embedded Content\Exercises\Audio Sampler\Audio\back-of-the-net.mp3",
"C:\Users\marwa\Documents\GitHub\web-dev-1-a1-set-exercises-sadaffatima19\Chapter-5-Embedded Content\Exercises\Audio Sampler\Audio\bangoutoforder.mp3",
"C:\Users\marwa\Documents\GitHub\web-dev-1-a1-set-exercises-sadaffatima19\Chapter-5-Embedded Content\Exercises\Audio Sampler\Audio\dan.mp3",
"C:\Users\marwa\Documents\GitHub\web-dev-1-a1-set-exercises-sadaffatima19\Chapter-5-Embedded Content\Exercises\Audio Sampler\Audio\emailoftheevening.mp3",
"C:\Users\marwa\Documents\GitHub\web-dev-1-a1-set-exercises-sadaffatima19\Chapter-5-Embedded Content\Exercises\Audio Sampler\Audio\hellopartridge.mp3",
"C:\Users\marwa\Documents\GitHub\web-dev-1-a1-set-exercises-sadaffatima19\Chapter-5-Embedded Content\Exercises\Audio Sampler\Audio\iateascotchegg.mp3",
"C:\Users\marwa\Documents\GitHub\web-dev-1-a1-set-exercises-sadaffatima19\Chapter-5-Embedded Content\Exercises\Audio Sampler\Audio\imconfused.mp3"];

    // Create audio elements for each audio file
    audioFiles.forEach(audioFile => {
        const audioElement = document.createElement('audio');
        audioElement.src = `Audio Sampler/${audioFile}`;
        audioElement.preload = 'auto';

        const button = document.createElement('button');
        button.className = 'audio-button';
        button.textContent = audioFile.replace('.mp3', '');
        button.addEventListener('click', () => {
            audioElement.currentTime = 0;
            audioElement.play();
        });

        // Append button to the soundboard
        soundboard.appendChild(button);
    });
});