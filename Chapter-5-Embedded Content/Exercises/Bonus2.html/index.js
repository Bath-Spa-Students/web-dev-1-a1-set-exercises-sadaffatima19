document.addEventListener('DOMContentLoaded', function() {
    const soundboard = document.getElementById('soundboard');
    const textInput = document.getElementById('text-input');
    const convertButton = document.getElementById('convert-button');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    // Audio samples data (names and durations)
    const audioSamples = [
        { name: 'C:\Users\marwa\Documents\GitHub\web-dev-1-a1-set-exercises-sadaffatima19\Chapter-5-Embedded Content\Exercises\Audio Sampler\Audio\ah-ha.mp3', duration: 10 },
        { name: 'Sample 2', duration: 15 },
        { name: 'Sample 3', duration: 20 },
        // Add more samples as needed
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
            const audioElement = document.createElement('audio');
            audioElement.src = `Audio Sampler/sample${i + 1}.mp3`;
            audioElement.preload = 'auto';

            const button = document.createElement('button');
            button.className = 'audio-button';
            button.textContent = audioSamples[i].name;
            button.setAttribute('data-duration', audioSamples[i].duration + 's');
            button.addEventListener('click', () => {
                audioElement.currentTime = 0;
                audioElement.play();
            });

            const durationSpan = document.createElement('span');
            durationSpan.textContent = `${audioSamples[i].duration} seconds`;

            const sampleDiv = document.createElement('div');
            sampleDiv.classList.add('sample');
            sampleDiv.appendChild(button);
            sampleDiv.appendChild(durationSpan);

            soundboard.appendChild(sampleDiv);
        }

        // Hide/show pagination arrows based on current page
        leftArrow.style.display = currentPage === 0 ? 'none' : 'block';
        rightArrow.style.display = endIndex >= audioSamples.length ? 'none' : 'block';
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Other code...
    
        // Function to toggle visibility of pagination arrows
        function toggleArrows() {
            const totalPages = Math.ceil(audioSamples.length / samplesPerPage);
            leftArrow.style.display = currentPage === 0 ? 'none' : 'block';
            rightArrow.style.display = currentPage === totalPages - 1 ? 'none' : 'block';
        }
    
        // Pagination event listeners
        leftArrow.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                displaySamples();
                toggleArrows();
            }
        });
    
        rightArrow.addEventListener('click', () => {
            const totalPages = Math.ceil(audioSamples.length / samplesPerPage);
            if (currentPage < totalPages - 1) {
                currentPage++;
                displaySamples();
                toggleArrows();
            }
        });
    
        // Initial display of samples and arrows
        displaySamples();
        toggleArrows();
    });
    

    // Pagination event listeners
    leftArrow.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            displaySamples();
        }
    });

    rightArrow.addEventListener('click', () => {
        const totalPages = Math.ceil(audioSamples.length / samplesPerPage);
        if (currentPage < totalPages - 1) {
            currentPage++;
            displaySamples();
        }
    });

    // Text-to-speech functionality
    convertButton.addEventListener('click', () => {
        const text = textInput.value;
        if (text.trim() !== '') {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        }
    });

    // Initial display of samples
    displaySamples();
});