// ====Exercice1 
// 1
const genres = document.getElementById('genres');
const showBtn = document.getElementById('showValue');

showBtn.addEventListener('click', () => {
    console.log('Selected genre:', genres.value);
});

// 2
const classicOption = document.createElement('option');
classicOption.value = 'classic';
classicOption.textContent = 'Classic';
classicOption.selected = true;
genres.appendChild(classicOption);

// ====Exercice2
function removecolor() {
    const select = document.getElementById('colorSelect');
    select.remove(select.selectedIndex);
}

document.getElementById('removeBtn').addEventListener('click', removecolor);

// ====Exercice3

let shoppingList = [];

const root = document.getElementById('root');

const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter item';
const addBtn = document.createElement('button');
addBtn.type = 'button';
addBtn.textContent = 'AddItem';
form.appendChild(input);
form.appendChild(addBtn);
root.appendChild(form);

const clearBtn = document.createElement('button');
clearBtn.type = 'button';
clearBtn.textContent = 'ClearAll';
root.appendChild(clearBtn);

const listContainer = document.createElement('ul');
root.appendChild(listContainer);

function addItem() {
    const value = input.value.trim();
    if (value) {
        shoppingList.push(value);
        renderList();
        input.value = '';
    }
}

function clearAll() {
    shoppingList = [];
    renderList();
}

function renderList() {
    listContainer.innerHTML = '';
    shoppingList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listContainer.appendChild(li);
    });
}

addBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', clearAll);