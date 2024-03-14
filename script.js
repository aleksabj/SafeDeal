// You can add any interactivity or functionality here
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`${button.textContent} button clicked`);
        // Add your desired functionality here
    });
});
