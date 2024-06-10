const countdownElement = document.getElementById('countdown');

function displayNumber(number, callback) {
    countdownElement.innerText = number;
    setTimeout(callback, 1000);
}

function startCountdown() {
    displayNumber(10, function() {
        displayNumber(9, function() {
            displayNumber(8, function() {
                displayNumber(7, function() {
                    displayNumber(6, function() {
                        displayNumber(5, function() {
                            displayNumber(4, function() {
                                displayNumber(3, function() {
                                    displayNumber(2, function() {
                                        displayNumber(1, function() {
                                            countdownElement.innerText = "Happy Independence Day!";
                                            countdownElement.style.cursor = 'default'; // Remove cursor pointer after countdown
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

countdownElement.addEventListener('click', function() {
    countdownElement.removeEventListener('click', arguments.callee); // Remove click event to prevent restarting
    startCountdown();
});
