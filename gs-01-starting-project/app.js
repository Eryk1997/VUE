const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const displayEl = document.querySelector('ul');

function addGoal() {
    const inputValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = inputValue;
    displayEl.appendChild(listItemEl);
    inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal)