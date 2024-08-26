function changeText(document) {
    const button = document.createElement('button');
    button.textContent = 'Change Text';
    button.className = 'bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition duration-300';
    const myText = document.createElement('p');
    myText.id = 'myText';
    myText.textContent = 'Click the button to change this text.';
    myText.className = 'mt-2';
    button.addEventListener('click', () => {
        myText.textContent = 'Hello, Check!';
    });
    const container = document.createElement('div');
    container.appendChild(button);
    container.appendChild(myText);
    return container;
}