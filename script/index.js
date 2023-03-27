import { FormValidator, classSelector } from "./FormValidator.js";
import { Card } from "./Card.js";

const popUpAccount = document.querySelector(".popup_type_account");
const popUpCard = document.querySelector(".popup_type_card");
const popUpImage = document.querySelector(".popup_type_image");

const closeButtons = document.querySelectorAll(".popup__button-close");
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

const bigImage = popUpImage.querySelector(".popup__image");
const bigImageDescription = popUpImage.querySelector(".popup__description");

const popups = document.querySelectorAll(".popup");

const cardItemValidate = new FormValidator(classSelector, formElementCard);
cardItemValidate.enableValidation();
const profileEditeValidate = new FormValidator(classSelector, formElementAccount);
profileEditeValidate.enableValidation();

const initialCards = [
  {
    name: "Териберка.",
    link: "./images/places/teriberka.jpg",
  },
  {
    name: "Москва.",
    link: "./images/places/moscow.jpg",
  },
  {
    name: "Кинерма.",
    link: "./images/places/kinerma.jpg",
  },
  {
    name: "Кировск.",
    link: "./images/places/kirkovsk.jpg",
  },
  {
    name: "Самара.",
    link: "./images/places/samara.jpg",
  },
  {
    name: "Иваново.",
    link: "./images/places/ivanovo.jpg",
  },
];

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}

const closePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

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
  let obj = new Object();
  obj.name = placeInput.value;
  obj.link = linkInput.value;
  initialCards.push(obj);
  addCard(initialCards[initialCards.length - 1], "#card-template");
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

export { popUpImage, bigImage, bigImageDescription, openPopup };