
//get input text element
const inputElement = document.getElementById('product');
//get button element 
const buttonAddElement = document.getElementById('add-button');
//get list 
const ulShoppingListElement = document.getElementById('shopping-list');
//eventListner som lytter på click hendelse på knapp
// lese verdi av input text og legge til i list
buttonAddElement.addEventListener('click', renderList);
window.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        renderList();
    }
});

//eventlistner som lytter på tastatur knapp enters
// lese verdi av input text og legge til i list

function renderList() {
    if(inputElement.value !== ''){
        const liElement = document.createElement('li');
        ulShoppingListElement.classList.add('flex-item-2-bck')
        liElement.textContent = inputElement.value;
        ulShoppingListElement.appendChild(liElement);
        inputElement.value = '';

//Når man klikker en gang så blir teksten "strøket over"
        liElement.addEventListener('click', () => {
            liElement.classList.add('buyed');
        });
//Når man klikker to ganger blir teksten fjernet fra listen
        liElement.addEventListener('dblclick', () => {
            ulShoppingListElement.removeChild(liElement)
        });
    } else {
//Bruker får et varsel hvis man ikke legger inn tekst før man klikker på "add" eller enter
        alert('Please write an item in the white box below')
    }
}
