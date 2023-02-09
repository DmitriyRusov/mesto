let popUp = document.querySelector('.popup');

let editButton = document.querySelector('.main__edit-button');
// editButton.onclick = function() {popUp.classList.add('popup_opened')}
let openPopUp = function() {popUp.classList.add('popup_opened')}
editButton.addEventListener("click", openPopUp)

let closeButton = document.querySelector('.popup__button-close');
// closeButton.onclick = function() {popUp.classList.remove('popup_opened')}
let closePopUp = function() {popUp.classList.remove('popup_opened')}
closeButton.addEventListener("click", closePopUp)

let popName = document.querySelector('.main__title')
let popUpdescription = document.querySelector('.main__description')

document.querySelector('.popup__input-name').value = popName.innerText
document.querySelector('.popup__input-description').value = popUpdescription.innerText

let formElement = document.querySelector('.popup__form')

let nameInput = formElement.querySelector('.popup__input-name')
let jobInput = formElement.querySelector('.popup__input-description')

function handleFormSubmit (evt) {
evt.preventDefault();
popName.textContent = nameInput.value;
popUpdescription.textContent  = jobInput.value;
closePopUp ();
};

formElement.addEventListener('submit', handleFormSubmit);
