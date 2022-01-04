const addForm = document.querySelector('.add');
const ulReference = document.querySelector('.todos');
const search = document.querySelector('.search input')

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete">
            </i>
        </li>
    `;
    ulReference.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }   
});

//delete todos
ulReference.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    Array.from(ulReference.children)
        .filter((todo) => !todo.textContent.toLocaleLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(ulReference.children)
        .filter((todo) => todo.textContent.toLocaleLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});