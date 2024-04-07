document.addEventListener('DOMContentLoaded', function() {
    // Get elements from the DOM
    const soundboard = document.getElementById('soundboard');
    const textInput = document.getElementById('text-input');
    const convertButton = document.getElementById('convert-button');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    // Audio samples data
    const audioSamples = [
        { name: "Ah Ha", duration: 4 },
        { name: "Back of the Net", duration: 3 },
        { name: "Bang Out of Order", duration: 5 },
        { name: "Dan", duration: 2 },
        { name: "Email of the Evening", duration: 6 },
        { name: "Hello Partridge", duration: 4 },
        { name: "I Ate a Scotch Egg", duration: 3 },
        { name: "I'm Confused", duration: 2 }
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
            audioElement.src = `Audio Sampler/sample${i + 1}.mp3`;
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