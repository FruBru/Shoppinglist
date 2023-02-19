

//get input text element
const inputElement = document.getElementById('product');
//get button element 
const buttonAddElement = document.getElementById('add-button');
//get list 
const ulShoppingListElement = document.getElementById('shopping-list');
//eventListner som lytter på click hendelse på knapp
// lese verdi av input text og legge til i list
//eventlistner som lytter på tastatur knapp enters
buttonAddElement.addEventListener('click', renderList);
window.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        renderList();
    }
});

//brukt for debugging
//window.localStorage.clear(); 

//definerer elementId
var elementId = 0;

//Har definert max 100 list elements for å gjøre koden mindre komplisert og lettere å "runne"
loadForLocalStorage();
function loadForLocalStorage() {
    if (window.localStorage.length != 0 ){
        for (let i = 0; i <= 100; i++){
            if(window.localStorage.getItem(i)!== null) {
                addToList(window.localStorage.getItem(i))
            }
        }
    }
}

// lese verdi av input text og legge til i list
function renderList() {
    if(inputElement.value !== ''){
        addToList(inputElement.value);
    } else {
//Bruker får et varsel hvis man ikke legger inn tekst før man klikker på "add" eller enter
        alert('Please write an item in the white box below')
    }
}

//funksjon for å legge til liste, for å slippe å dobble koden
function addToList(ListText){
    const liElement = document.createElement('li');
    ulShoppingListElement.classList.add('flex-item-2-bck');
    liElement.textContent = ListText;
    ulShoppingListElement.appendChild(liElement);
    //legge til list i localstarage
    window.localStorage.setItem(elementId, liElement.textContent);
    elementId++;
    inputElement.value = '';

    //Når man klikker en gang så blir teksten "strøket over"
    liElement.addEventListener('click', () => {
        liElement.classList.add('buyed');
    });
    //Når man klikker to ganger blir teksten fjernet fra listen
    liElement.addEventListener('dblclick', () => {
        ulShoppingListElement.removeChild(liElement)
        for (let i = 0; i <= 100; i++){
            if(ListText == window.localStorage.getItem(i)){
                window.localStorage.removeItem(i);
                break;
            }
        }
    });
}