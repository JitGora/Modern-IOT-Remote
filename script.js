const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const status = button.querySelector('.status');
        const device = button.dataset.device;

        // Toggle status (replace with your actual logic)
        if (status.classList.contains('on')) {
            status.classList.remove('on');
            status.classList.add('off');
            console.log(`Turning ${device} OFF`); // Example: Send OFF command to server
        } else {
            status.classList.remove('off');
            status.classList.add('on');
            console.log(`Turning ${device} ON`); // Example: Send ON command to server
        }
    });
});