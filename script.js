document.getElementById('add-todo').addEventListener('click', function() {
    const todoText = document.getElementById('new-todo').value;
    if (todoText === '') {
        alert('Please enter a task.');
        return;
    }
    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');

    const todoSpan = document.createElement('span');
    todoSpan.textContent = todoText;
    listItem.appendChild(todoSpan);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
    document.getElementById('new-todo').value = '';
});
