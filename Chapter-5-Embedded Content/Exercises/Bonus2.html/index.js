document.addEventListener('DOMContentLoaded', function() {
    // Get elements from the DOM
    const soundboard = document.getElementById('soundboard');
    const textInput = document.getElementById('text-input');
    const convertButton = document.getElementById('convert-button');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    // Audio samples data
    const audioSamples = [
        { name: "Ah Ha", duration: 1, path: "../../Exercises/Audio Sampler/Audio/ah-ha.mp3"},
        { name: "Back of the Net", duration: 1, path: "../../Exercises/Audio Sampler/Audio/back-of-the-net.mp3" },
        { name: "Bang Out of Order", duration: 0, path: "../../Exercises/Audio Sampler/Audio/bangoutoforder.mp3" },
        { name: "Dan", duration: 3, path: "../../Exercises/Audio Sampler/Audio/dan.mp3" },
        { name: "Email of the Evening", duration: 3, path: "../../Exercises/Audio Sampler/Audio/emailoftheevening.mp3" },
        { name: "Hello Partridge", duration: 0, path: "../../Exercises/Audio Sampler/Audio/hellopartridge.mp3" },
        { name: "I Ate a Scotch Egg", duration: 1, path: "../../Exercises/Audio Sampler/Audio/iateascotchegg.mp3" },
        { name: "I'm Confused", duration: 1, path: "../../Exercises/Audio Sampler/Audio/imconfused.mp3" },
        { name: "Aaaa", duration: 1, path: "../../Exercises/Audio Sampler/Audio/aaaa.mp3" },
        { name: "Ahahahaha", duration: 1, path: "../../Exercises/Audio Sampler/Audio/ahahahaha.mp3" },
        { name: "Uuuu-aaaa", duration: 2, path: "../../Exercises/Audio Sampler/Audio/uuuu-aaaa.mp3" },
        { name: "Bye-Bye", duration: 1, path: "../../Exercises/Audio Sampler/Audio/bye-bye.mp3" },
        { name: "Hello", duration: 0, path: "../../Exercises/Audio Sampler/Audio/hello.mp3" },
        { name: "Yeah-Yeah", duration: 1, path: "../../Exercises/Audio Sampler/Audio/yeah-yeah.mp3" },
        { name: "Hey-Whats-Up", duration: 1, path: "../../Exercises/Audio Sampler/Audio/hey-whats-up.mp3" },
        { name: "Giggle", duration: 3, path: "../../Exercises/Audio Sampler/Audio/giggle.mp3" },
        { name: "Hurry-Up", duration: 1, path: "../../Exercises/Audio Sampler/Audio/hurry-up.mp3" },
    ];

    // Pagination variables
    const samplesPerPage = 9;
    let currentPage = 0;

    // Function to display audio samples based on current page
    function displaySamples() {
        soundboard.innerHTML = ''; // Clear previous samples
        const startIndex = currentPage * samplesPerPage;
        const endIndex = Math.min(startIndex + samplesPerPage, audioSamples.length);

        for (let i = startIndex; i < endIndex; i++) {
            // Create audio element
            const audioElement = document.createElement('audio');
            audioElement.src = audioSamples[i].path;
            audioElement.preload = 'auto';

            // Create button for each audio sample
            const button = document.createElement('button');
            button.className = 'audio-button';
            button.textContent = audioSamples[i].name;
            button.setAttribute('data-duration', audioSamples[i].duration + 's');
            button.addEventListener('click', () => {
                audioElement.currentTime = 0;
                audioElement.play();
            });

            // Create span to display duration
            const durationSpan = document.createElement('span');
            durationSpan.textContent = `${audioSamples[i].duration} seconds`;

            // Create div to contain button and duration
            const sampleDiv = document.createElement('div');
            sampleDiv.classList.add('sample');
            sampleDiv.appendChild(button);
            sampleDiv.appendChild(durationSpan);

            // Append sample div to soundboard
            soundboard.appendChild(sampleDiv);
        }

        // Hide/show pagination arrows based on current page
        leftArrow.style.display = currentPage === 0 ? 'none' : 'block';
        rightArrow.style.display = endIndex >= audioSamples.length ? 'none' : 'block';
    }

    // Function to update current page and display samples
    function updatePage(direction) {
        const totalPages = Math.ceil(audioSamples.length / samplesPerPage);
        if (direction === 'left' && currentPage > 0) {
            currentPage--;
        } else if (direction === 'right' && currentPage < totalPages - 1) {
            currentPage++;
        }
        displaySamples();
    }

    // Pagination event listeners
    leftArrow.addEventListener('click', () => {
        updatePage('left');
    });

    rightArrow.addEventListener('click', () => {
        updatePage('right');
    });

    // Text-to-speech functionality
    convertButton.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text !== '') {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        }
    });

    // Initial display of samples
    displaySamples();
});