// Get DOM elements
const inputContainer = document.getElementById('input-container');
const countdownContainer = document.getElementById('countdown-container');
const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('start-button');
const datetimeInput = document.getElementById('datetime-input');

// Function to start the countdown with the selected date and time
function startCountdown() {
    const selectedDate = new Date(datetimeInput.value).getTime();

    if (isNaN(selectedDate)) {
        alert('Please enter a valid date and time.');
        return;
    }

    // Hide the input form and show the countdown container
    inputContainer.style.display = 'none';
    countdownContainer.style.display = 'block';

    // Update the countdown every second
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = selectedDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Conditionally remove the days counter if less than 1 day
        let countdownText = '';
        if (days > 0) {
            countdownText += days + "d ";
        }
        // Add hours, minutes, seconds with colons between them
        countdownText += `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Display the countdown
        countdownDisplay.innerHTML = countdownText;

        // If the countdown reaches 0, stop the interval and display a message
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownDisplay.innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Add event listener to the start button
startButton.addEventListener('click', startCountdown);
