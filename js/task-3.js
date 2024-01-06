const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    const cleanedValue = event.currentTarget.value.trim();
    textOutput.textContent = cleanedValue || 'Anonymous';
});