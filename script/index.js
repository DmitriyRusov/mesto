let popUp = document.querySelector(".popup");

let editButton = document.querySelector(".profile__edit-button");

let closeButton = document.querySelector(".popup__button-close");

let popName = document.querySelector(".profile__title");
let popUpdescription = document.querySelector(".profile__description");

let formElement = document.querySelector(".popup__form");

let nameInput = formElement.querySelector(".popup__input_value_name");
let jobInput = formElement.querySelector(".popup__input_value_description");

let closePopUp = function () {
    popUp.classList.remove("popup_opened");
};

let openPopUp = function () {
    popUp.classList.add("popup_opened");
    nameInput.value = popName.textContent;
    jobInput.value = popUpdescription.textContent;
};

function handleFormSubmit(evt) {
    evt.preventDefault();
    popName.textContent = nameInput.value;
    popUpdescription.textContent = jobInput.value;
    closePopUp();
}

closeButton.addEventListener("click", closePopUp);
editButton.addEventListener("click", openPopUp);
formElement.addEventListener("submit", handleFormSubmit);
