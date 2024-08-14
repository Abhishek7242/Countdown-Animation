const countdownNumber = document.getElementById('countdown-number');
const message = document.getElementById('message');
const countdownContainer = document.querySelector('.countdown-container');
let countdownValue = 9;
    const countdown = setInterval(() => {
        countdownNumber.textContent = countdownValue;

        if (countdownValue === 0) {
            clearInterval(countdown);
            countdownContainer.style.animation = 'explosion 1s forwards';
            message.style.display = 'block';
        }

        countdownValue--;
    }, 1000);

