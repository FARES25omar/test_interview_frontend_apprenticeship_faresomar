async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        const firstFiveTodos = todos.slice(0, 5);

        const ul = document.createElement('ul');
        firstFiveTodos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.title;
            ul.appendChild(li);
        });

        document.body.appendChild(ul);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

fetchTodos();