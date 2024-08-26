document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Change Text';
    button.addEventListener('click', () => {
        const textElement = document.getElementById('myText');
        if (textElement) {
            textElement.textContent = 'Hello, Check!';
        }
    });
    document.body.appendChild(button);
});