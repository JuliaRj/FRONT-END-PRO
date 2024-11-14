

const form = document.querySelector('form');
const inputValue = document.querySelector('.form__input');
const toDoListBody = document.querySelector('.js--todos-wrapper');

function createToDoLi(parent, inputText, isChecked = false) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    if (isChecked) {
        li.classList.add('todo-item--checked');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isChecked;

    const span = document.createElement('span');
    span.textContent = inputText;
    span.classList.add('todo-item__description');

    const button = document.createElement('button');
    button.textContent = 'Видалити';
    button.classList.add('todo-item__delete');

    li.append(checkbox, span, button);
    parent.appendChild(li);
}

function loadToDos() {
    const toDoListsFromLocalstorage = JSON.parse(localStorage.getItem('toDoLists')) || [];
    toDoListsFromLocalstorage.forEach((todo) => createToDoLi(toDoListBody, todo.text, todo.isChecked));
}

function saveToDos() {
    const todos = [];
    document.querySelectorAll('.todo-item').forEach((item) => {
        const text = item.querySelector('.todo-item__description').textContent;
        const isChecked = item.querySelector('input[type="checkbox"]').checked;
        todos.push({ text, isChecked });
    });
    localStorage.setItem('toDoLists', JSON.stringify(todos));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const toDoValue = inputValue.value;
    createToDoLi(toDoListBody, toDoValue);
    saveToDos();
    form.reset();
});

toDoListBody.addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('todo-item__delete')) {
        target.closest('li').remove();
        saveToDos();
    } else if (target.type === 'checkbox') {
        target.closest('li').classList.toggle('todo-item--checked');
        saveToDos();
    }
});

document.addEventListener('DOMContentLoaded', loadToDos);