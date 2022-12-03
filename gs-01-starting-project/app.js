Vue.createApp({
    data() {
        return {
            descriptions: [],
            description: '',
        }
    },

    methods: {
        addDescription() {
            this.descriptions.push(this.description);
            this.description = '';
        }
    }
}).mount('#app');

// const inputEl = document.querySelector('input');
// const buttonEl = document.querySelector('button');
// const displayEl = document.querySelector('ul');

// function addGoal() {
//     const inputValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = inputValue;
//     displayEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal)