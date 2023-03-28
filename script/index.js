import { FormValidator, validatorConfig } from "./FormValidator.js";
import { initialCards } from "./utils/constants.js";
import { openPopup, closePopup } from "./utils/utils.js";
import { Card } from "./Card.js";

const popUpAccount = document.querySelector(".popup_type_account");
const popUpCard = document.querySelector(".popup_type_card");

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const popName = document.querySelector(".profile__title");
const popUpdescription = document.querySelector(".profile__description");

const elementsContainer = document.querySelector(".elements__section-elements");

const formElementAccount = document.forms["popup-form-account"];
const nameInput = formElementAccount.elements["input-name"];
const jobInput = formElementAccount.elements["input-description"];

const formElementCard = document.forms["popup-form-card"];
const placeInput = formElementCard.elements["input-name"];
const linkInput = formElementCard.elements["input-description"];

const popups = document.querySelectorAll(".popup");

const cardItemValidate = new FormValidator(validatorConfig, formElementCard);
cardItemValidate.enableValidation();
const profileEditeValidate = new FormValidator(validatorConfig, formElementAccount);
profileEditeValidate.enableValidation();

function openPopUpAccount() {
  openPopup(popUpAccount);
  nameInput.value = popName.textContent;
  jobInput.value = popUpdescription.textContent;
}

function handleFormSubmitAccount(evt) {
  evt.preventDefault();
  popName.textContent = nameInput.value;
  popUpdescription.textContent = jobInput.value;
  closePopup(popUpAccount);
}

function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const cardData = new Object();
  cardData.name = placeInput.value;
  cardData.link = linkInput.value;
  addCard(cardData, "#card-template");
  closePopup(popUpCard);
  evt.target.reset();
}

function addCard(initialCards, templateSelector) {
  const cardElement = new Card(initialCards, templateSelector);
  elementsContainer.prepend(cardElement.randerCard());
}

for (let i = 0; i < initialCards.length; i++) {
  addCard(initialCards[i], "#card-template");
}

editButton.addEventListener("click", openPopUpAccount);
addButton.addEventListener("click", () => openPopup(popUpCard));

formElementAccount.addEventListener("submit", handleFormSubmitAccount);
formElementCard.addEventListener("submit", handleFormSubmitCard);

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__button-close")) {
      closePopup(popup);
    }
  });
});
