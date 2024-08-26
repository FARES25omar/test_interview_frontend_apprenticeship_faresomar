async function fetchTodos(document) {
    const container = document.createElement('div');
    container.textContent = 'Loading...';
    try {
        await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                const todos = data.slice(0, 5);
                const ul = document.createElement('ul');
                ul.className = 'list-disc list-inside';
                todos.forEach(todo => {
                    const li = document.createElement('li');
                    li.textContent = todo.title;
                    ul.appendChild(li);
                });
                container.textContent = '';
                container.appendChild(ul);
            })
            .catch(error => {
                container.textContent = 'Error: ' + error.message;
            });
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
    return container;
}

